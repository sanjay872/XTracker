import Image from "next/image";
import "@styles/Home.css";

const Home = () => {
    const imageWidth = 200;
    const imageHeight = 200;

    return (
        <div className="home">
            <div className="title">
                <h1>Expense Tracker</h1>
                <p>Keep track of your expenses with this simple and easy to use expense tracker.</p>
            </div>
            <div className="grid">
                <Image className="img item1" src="/asserts/images/home_1.jpg" alt="Expense Tracker" width={imageWidth} height={imageHeight} />
                <Image className="img item2" src="/asserts/images/home_2.jpg" alt="Expense Tracker" width={imageWidth} height={imageHeight} />
                <Image className="img item3" src="/asserts/images/home_3.jpg" alt="Expense Tracker" width={imageWidth} height={imageHeight} />
                <Image className="img item4" src="/asserts/images/home_4.jpg" alt="Expense Tracker" width={imageWidth} height={imageHeight} />
                <Image className="img item5" src="/asserts/images/home_5.jpg" alt="Expense Tracker" width={imageWidth} height={imageHeight} />
                <Image className="img item6" src="/asserts/images/home_6.jpg" alt="Expense Tracker" width={imageWidth} height={imageHeight} />
                <Image className="img item7" src="/asserts/images/home_7.jpg" alt="Expense Tracker" width={imageWidth} height={imageHeight} />
                <Image className="img item8" src="/asserts/images/home_8.jpg" alt="Expense Tracker" width={imageWidth} height={imageHeight} />
            </div>
        </div>
    );
}
export default Home;