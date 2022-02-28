const router = require("express").Router();
const snoowrap = require("snoowrap");
const config = require('config');

const redditUserAgent = config.get("redditUserAgent");
const redditClientID = config.get("redditClientID");
const redditClientSecret = config.get("redditClientSecret");
const redditUsername = config.get("redditUsername");
const redditPassword = config.get("redditPassword");

const r = new snoowrap({
  userAgent: redditUserAgent,
  clientId: redditClientID,
  clientSecret: redditClientSecret,
  username: redditUsername,
  password: redditPassword,
});


// Get question details from challenge_id
router.post('/get-posts-programmer-humor', async (req, res) => {

  const { afterName } = req.body

    try {
        let limit = 10;

        let ans = []

        let b = await r
          .getSubreddit("ProgrammerHumor")
          .getNew({ limit: limit, after: afterName })
          .map((post, index, data) => {
            if (post.url.split("/")[2] === "v.redd.it") {
              ans.push({
                title: post.title,
                url: post.secure_media.reddit_video.fallback_url,
                post: post.subreddit.display_name,
                name: post.name,
                time: post.created,
                link: post.permalink,
                type: "video",
              });
            } else if (post.url.split("/")[2] === "i.redd.it") {
              ans.push({
                title: post.title,
                url: post.url,
                post: post.subreddit.display_name,
                name: post.name,
                time: post.created,
                link: post.permalink,
                type: "photo",
              });
            } else {
              ans.push({
                title: post.title,
                url: post.url,
                post: post.subreddit.display_name,
                name: post.name,
                time: post.created,
                link: post.permalink,
                type: "discussion",
              });
            }
          });

        return res.status(200).send(ans)
    } catch (error) {
        console.log(error)
        return res.status(400).send({ msg: 'Bad Request' })
    }
})


router.post('/get-posts-memes', async (req, res) => {

  const { afterName } = req.body;

    try {
        let limit = 10;

        let ans = []
        let afterNameCount = 0

        let b = await r
          .getSubreddit("memes")
          .getNew({ limit: limit, after: afterName })
          .map((post, index, data) => {
            if (post.url.split("/")[2] === "v.redd.it") {
              ans.push({
                title: post.title,
                url: post.secure_media.reddit_video.fallback_url,
                post: post.subreddit.display_name,
                name: post.name,
                time: post.created,
                link: post.permalink,
                type: "video",
              });
            } else if (post.url.split("/")[2] === "i.redd.it") {
              ans.push({
                title: post.title,
                url: post.url,
                post: post.subreddit.display_name,
                name: post.name,
                time: post.created,
                link: post.permalink,
                type: "photo",
              });
            } else {
              ans.push({
                title: post.title,
                url: post.url,
                post: post.subreddit.display_name,
                name: post.name,
                time: post.created,
                link: post.permalink,
                type: "discussion",
              });
            }
          });

        return res.status(200).send(ans)
    } catch (error) {
        console.log(error)
        return res.status(400).send({ msg: 'Bad Request' })
    }
})

router.post('/get-posts-thats-insane', async (req, res) => {

  const { afterName } = req.body;

    try {
        let limit = 10;

        let ans = []
        let afterNameCount = 0

        let b = await r
          .getSubreddit("ThatsInsane")
          .getNew({ limit: limit, after: afterName })
          .map((post, index, data) => {
            if (post.url.split("/")[2] === "v.redd.it") {
              ans.push({
                title: post.title,
                url: post.secure_media.reddit_video.fallback_url,
                post: post.subreddit.display_name,
                name: post.name,
                time: post.created,
                link: post.permalink,
                type: "video",
              });
            } else if (post.url.split("/")[2] === "i.redd.it") {
              ans.push({
                title: post.title,
                url: post.url,
                post: post.subreddit.display_name,
                name: post.name,
                time: post.created,
                link: post.permalink,
                type: "photo",
              });
            } else {
              ans.push({
                title: post.title,
                url: post.url,
                post: post.subreddit.display_name,
                name: post.name,
                time: post.created,
                link: post.permalink,
                type: "discussion",
              });
            }
          });

        return res.status(200).send(ans)
    } catch (error) {
        console.log(error)
        return res.status(400).send({ msg: 'Bad Request' })
    }
})

router.post('/get-posts-gaming', async (req, res) => {

  const { afterName } = req.body;

    try {
        let limit = 10;

        let ans = []
        let afterNameCount = 0

        let b = await r
          .getSubreddit("gaming")
          .getNew({ limit: limit, after: afterName })
          .map((post, index, data) => {
            if (post.url.split("/")[2] === "v.redd.it") {
              ans.push({
                title: post.title,
                url: post.secure_media.reddit_video.fallback_url,
                post: post.subreddit.display_name,
                name: post.name,
                time: post.created,
                link: post.permalink,
                type: "video",
              });
            } else if (post.url.split("/")[2] === "i.redd.it") {
              ans.push({
                title: post.title,
                url: post.url,
                post: post.subreddit.display_name,
                name: post.name,
                time: post.created,
                link: post.permalink,
                type: "photo",
              });
            } else {
              ans.push({
                title: post.title,
                url: post.url,
                post: post.subreddit.display_name,
                name: post.name,
                time: post.created,
                link: post.permalink,
                type: "discussion",
              });
            }
          });

        return res.status(200).send(ans)
    } catch (error) {
        console.log(error)
        return res.status(400).send({ msg: 'Bad Request' })
    }
})


module.exports = router