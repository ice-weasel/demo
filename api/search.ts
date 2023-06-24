import { NextApiRequest, NextApiResponse } from "next";

const searchHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req.query;

  // Perform your search logic here using the query parameter

  // Dummy response for demonstration
  const searchResults = [
    { id: 1, title: "Result 1" },
    { id: 2, title: "Result 2" },
    { id: 3, title: "Result 3" },
  ];

  res.status(200).json(searchResults);
};

export default searchHandler;
