import getRawBody from 'raw-body';
import moment from "moment";

export async function getServerSideProps({req, query}) {
    const currentDate = moment().format("YYYY-MM-DD - HH:mm:ss");
    let data ={}
    if (req.method == "POST") {
    const body = await getRawBody(req)
    const data = JSON.parse(body.toString("utf-8"));
    console.log(body.toString("utf-8"))
  }
  console.log(data)
  return { props: { lastUpdateDate: currentDate, headers: req.headers, data, query } };
};

export default function showRequestPage({
  query,
  headers,
  data,
  lastUpdateDate,
}) {
  return (
    <div>
      <p>Page generated on : {lastUpdateDate}</p>
      Request body : <pre>{JSON.stringify(data, null, 2)}</pre>
      Request query : <pre>{JSON.stringify(query, null, 2)}</pre>
      Request headers : <pre>{JSON.stringify(headers, null, 2)}</pre>
    </div>
  );
}