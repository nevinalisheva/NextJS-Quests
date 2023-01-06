import { getCampusesFromDb } from "../db";

export async function getStaticProps() {
  const allCampusesData = await getCampusesFromDb();
//   console.log(allCampusesData);
  return {
    props: {
      allCampusesData,
    },
    
  };
}

const Campuses = ({allCampusesData}) => {
  return (
    <section>
      <h2>List of Wild Code School Campuses </h2>
      <ul>
        {allCampusesData.map(({ id, name }) => (
          <li key={id}>
            {id}{" "}
            {name}
           
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Campuses;
