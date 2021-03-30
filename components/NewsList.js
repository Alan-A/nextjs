/*
Die h2 soll nur angezeigt werden, wenn eine Überschrift
mit dem prop title übergeben wird. Der Array mit den
Meldungen soll im prop news übergeben werden.

    <section class="news-list">
      <h2 className="news-list__title">Überschrift</h2>
Hier die NewsItem-Elemente anzeigen
    </section>
*/

import NewsItem from "./NewsItem";

export default function NewsList({ news, title = "" }) {
  return (
    <section className="news-list">
      {title && <h2 className="news-list__title">{title}</h2>}
      {news.map((item) => (
        <NewsItem key={item.url} {...item} />
      ))}
    </section>
  );
}
