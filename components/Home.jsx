import Image from "next/image";
import "@styles/Home.css";

const Home = () => {
    const imageWidth = 200;
    const imageHeight = 200;

    return (
        <div>
            <h1>Welcome to Expense Tracker</h1>
            <div className="grid">
                <Image src="/asserts/images/home_1.jpg" alt="Expense Tracker" width={imageWidth} height={imageHeight} />
                <Image src="/asserts/images/home_2.jpg" alt="Expense Tracker" width={imageWidth} height={imageHeight} />
                <Image src="/asserts/images/home_3.jpg" alt="Expense Tracker" width={imageWidth} height={imageHeight} />
                <Image src="/asserts/images/home_4.jpg" alt="Expense Tracker" width={imageWidth} height={imageHeight} />
                <Image src="/asserts/images/home_5.jpg" alt="Expense Tracker" width={imageWidth} height={imageHeight} />
                <Image src="/asserts/images/home_6.jpg" alt="Expense Tracker" width={imageWidth} height={imageHeight} />
                <Image src="/asserts/images/home_7.jpg" alt="Expense Tracker" width={imageWidth} height={imageHeight} />
            </div>
        </div>
    );
}
export default Home;