import { Fragment } from "react";
import { Route, useParams } from "react-router";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Konrad", text: "Learning React is great!" },
  { id: "q2", author: "Maria", text: "I want to learn it too!" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No Quote Found.</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/:quoteId/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
