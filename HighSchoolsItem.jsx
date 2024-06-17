import { Link } from 'react-router-dom';
const HighSchoolsItem = ({ result }) => {
    // Link 元素會產生一個超連結，讓使用者可以點擊超連結來切換頁面
    // 其中的屬性relative='path' 代表要轉換成相對路徑
    // 而to='..' 屬性會將超連結轉換成上一頁的路徑
    return (
        <div>
            <h1>{result.objectid}學校詳細資料</h1>
            <p>學校名稱：{result.name}</p>
            <p>屬於哪種學校：{result.naics_desc}</p>
            <p>連絡電話：{result.telephone}</p>
            <p>學校網站：<a href={result.website}>{result.website}</a></p>
            <hr />
            <Link to='..' relative='path'>上一頁</Link>
        </div>
    );
}
export default HighSchoolsItem;