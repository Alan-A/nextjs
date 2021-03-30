{
  /* default Funktionen mussen keinen Name haben ... */
}
export default function (request, response) {
  console.log('request.query: ',request.query);

  const { text = "" } = request.query;

  const bigText = text.toUpperCase();

  response.status(200).json(bigText);
}
