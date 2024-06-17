import { Link } from "react-router-dom";
import classes from "./MainNavLink.module.css";

const HighSchoolsList = ({ results }) => {
    // 需要顯示的狀態
    const allowedStates = ['CO', 'CA', 'FL', 'NY', 'AZ'];

    // 根據 level 分類
    const groupedResults = results.reduce((acc, result) => {
        const { state } = result;
        if (allowedStates.includes(state)) {
            if (!acc[state]) {
                acc[state] = [];
            }
            acc[state].push(result);
        }
        return acc;
    }, {});

    return (
        <div>
            <h1>小學和中學資訊</h1>
            {
                Object.keys(groupedResults).map((state) => (
                    <div key={state}>
                        <h2>{state}</h2>
                        <div className={classes.grid}>
                            {groupedResults[state].map((result) => (
                                <div key={result.objectid} className={classes.item}>
                                    <h3>{result.name}</h3>
                                    <Link to={`/highSchool/` + result.objectid} className={classes.link}>
                                        <div className={classes.imageWrapper}>
                                            <img src={`https://picsum.photos/300/200?random=${result.objectid}`} alt={result.name} />
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default HighSchoolsList;
