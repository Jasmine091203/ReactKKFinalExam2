import { Link } from "react-router-dom";
import classes from "./MainNavLink.module.css";

const UniversityList = ({ results }) => {
    const filteredResults = results.filter(result => result.country === "USA");

    const groupedByNaicsDesc = filteredResults.reduce((acc, result) => {
        const { naics_desc } = result;
        if (!acc[naics_desc]) {
            acc[naics_desc] = [];
        }
        acc[naics_desc].push(result);
        return acc;
    }, {});

    return (
        <div>
            <h1>大學資訊</h1>
            {Object.keys(groupedByNaicsDesc).map((naics_desc) => (
                <div key={naics_desc}>
                    <h2>{naics_desc}</h2>
                    <div className={classes.grid}>
                        {groupedByNaicsDesc[naics_desc].map((result) => (
                            <div key={result.objectid} className={classes.item}>
                                <h3>{result.name}</h3>
                                <Link to={`/university/` + result.objectid} className={classes.link}>
                                    <div className={classes.imageWrapper}>
                                        <img src={`https://picsum.photos/300/200?random=${result.objectid}`} alt={result.name} />
                                    </div>
                                    {/* <p>Klick Me for More Information</p> */}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UniversityList;
