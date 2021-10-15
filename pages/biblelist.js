import styles from '../styles/Home.module.css';
import Link from "next/link";
import { db } from '../fbase';
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";

export default function Biblelist({ list }) {
    const book_name = {1 : "창세기",2 : "출애굽기",3 : "레위기",4 : "민수기",5 : "신명기",6 : "여호수아",7 : "사사기",8 : "룻기",9 : "사무엘상",10 : "사무엘하",11 : "열왕기상",12 : "열왕기하",13 : "역대상",14 : "역대하",15 : "에스라",16 : "느헤미야",17 : "에스더",18 : "욥기",19 : "시편",20 : "잠언",21 : "전도서",22 : "아가",23 : "이사야",24 : "예레미야",25 : "예레미야 애가",26 : "에스겔",27 : "다니엘",28 : "호세아",29 : "요엘",30 : "아모스",31 : "오바댜",32 : "요나",33 : "미가",34 : "나훔",35 : "하박국",36 : "스바냐",37 : "학개",38 : "스가랴",39 : "말라기",40 : "마태복음",41 : "마가복음",42 : "누가복음",43 : "요한복음",44 : "사도행전",45 : "로마서",46 : "고린도전서",47 : "고린도후서",48 : "갈라디아서",49 : "에베소서",50 : "빌립보서",51 : "골로새서",52 : "데살로니가전서",53 : "데살로니가후서",54 : "디모데전서",55 : "디모데후서",56 : "디도서",57 : "빌레몬서",58 : "히브리서",59 : "야고보서",60 : "베드로전서",61 : "베드로후서",62 : "요한1서",63 : "요한2서",64 : "요한3서",65 : "유다서",66 : "요한계시록"};

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href="/biblemain">
                    <h3>성경목차</h3>
                </Link>
            </header>
            <main className={styles.main}>
                {list.map((item, i) => (
                <div key={i}>
                    <Link href="/book/[id]" as={`/book/${item.book}`}>
                        <p>{book_name[item.book]}</p>
                    </Link>
                </div>
                ))}
            </main>
            <footer className={styles.footer}>
                <h3>footer</h3>
            </footer>
        </div>
    );
}

export async function getStaticProps() {
    const data = [];
    const q = query(collection(db, "bible"), where("chapter", "==", 1), where("verse", "==", 1), orderBy("book", "asc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        data.push(doc.data());
    });

    return {
        props: {
            list: data,
        },
    };
}