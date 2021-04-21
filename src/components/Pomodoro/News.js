const newsDuringWork = () => {
  req.headers({
    "x-rapidapi-key": "5cc2338ee1mshe1610b2e07e2274p1315cbjsne47452dd3a22",
    "x-rapidapi-host": "google-news1.p.rapidapi.com",
    useQueryString: true,
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
  });
};
export default newsDuringWork;
