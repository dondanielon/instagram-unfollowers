class InstagramHelper {
  BASE_URL = 'https://www.instagram.com/api/v1';

  constructor(appId, userId) {
    this.appId = appId;
    this.userId = userId;
  }

  async getUnfollowers() {
    const [followers, following] = await Promise.all([
      this.#getFollowersList(),
      this.#getFollowingList(),
    ]);

    return following.filter((user) => !followers.find((x) => x.pk === user.pk));
  }

  async #getFollowersList() {
    try {
      let followersNextId = null;

      const list = [];
      const path = `friendships/${this.userId}/followers/`;
      const followersResponse = await this.#fetchFollowData(path, {
        count: 50,
        search_surface: 'follow_list_page',
      });
      list.push(...followersResponse.users);

      followersNextId = followersResponse.next_max_id;

      while (followersNextId !== null) {
        const res = await this.#fetchFollowData(path, {
          count: 50,
          max_id: followersNextId,
          search_surface: 'follow_list_page',
        });

        list.push(...res.users);
        followersNextId = res.next_max_id ?? null;
        console.log('%cFollowers loaded: ', 'color: green', list.length);
      }

      return list;
    } catch (error) {
      console.error('Error fetching followers list', error);
    }
  }

  async #getFollowingList() {
    try {
      let followingNextId = null;

      const list = [];
      const path = `friendships/${this.userId}/following`;
      const followingResponse = await this.#fetchFollowData(path, { count: 50 });
      list.push(...followingResponse.users);

      followingNextId = followingResponse.next_max_id;

      while (followingNextId !== null) {
        const res = await this.#fetchFollowData(path, {
          count: 50,
          max_id: followingNextId,
        });

        list.push(...res.users);
        followingNextId = res.next_max_id ?? null;
        console.log('%cFollowing loaded: ', 'color: blue', list.length);
      }

      return list;
    } catch (error) {
      console.error('Error fetching following list', error);
    }
  }

  #fetchFollowData(path, params) {
    const queryString = Object.entries(params)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
    let url = `${this.BASE_URL}/${path}`;
    url += `?${queryString}`;

    return new Promise((resolve, reject) => {
      fetch(url, { method: 'GET', headers: { 'x-ig-app-id': this.appId } })
        .then((res) => res.json())
        .then(resolve)
        .catch(reject);
    });
  }
}
