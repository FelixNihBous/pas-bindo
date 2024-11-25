import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './Header.jsx';
import './css/Newpage.css';

// Import images
import kursiPatah from './assets/kursipatah.jpg';
import jatoh from './assets/jatoh.jpeg';
import kopidimalam from './assets/kopidimalam.jpg';
import gulingguling from './assets/gulingguling.jpeg';
import mejapatah from './assets/mejapatah.jpeg';
import hujan from './assets/hujan.jpeg';
import pushup from './assets/pushup.jpg';
import batagor from './assets/batagor.jpeg';
import basket from './assets/basket.jpeg'; 
import kentut from './assets/kentut.jpeg';
import lidahgigit from './assets/lidahgigit.jpeg';
import jatuhDariMotor from './assets/jatuhDariMotor.jpeg';
import jambret from './assets/jambret.jpeg';
// Add more image imports as needed

const stories = [
    { id: 1, title: 'Kejadian Kursi Patah', content: 'Pada suatu hari di Industri tepatnya di Greenlake, Pada saat itu Stevanus duduk dan istritahat santai bersama Pak Ivan. Kemudian Kursi yang di duduki Stevanus itu tiba-tiba patah dan pada saat itu juga kami 1 kelas RPL tertawa terbahak-bahak karena kejadian tersebut.', image: kursiPatah },
    { id: 2, title: 'Kejadian Pipin jatuh', content: 'Pada suatu hari di Greenlake City, saat itu Rico duduk di kursi sekitar jam 08.00 bersama Pak Ivan di kursi plastik. Saat Pipin jalan tepat dibelakang Rico, tiba-tiba Rico pun jatuh dan kursinya patah, Rico jatuh bersamaan dengan Pipin yang kaget dan ikut terjatuh, tangan Pipin pun keseleo.', image: jatoh },
    { id: 3, title: 'Jam 12 Malam Ekayana', content: 'Pada suatu hari di Vihara Ekayana di jam 11 & 12 malam. Kejadian ini berawal dari saya, Leo, Nando, Austin tidak bisa tidur. Kemudian Leo dan Saya keluar untuk membeli makanan dan minuman. Kemudian setelah mereka balik, mereka berdua membawa kopi dan 1 botol untuk mengisi kopi tersebut. Tetapi mereka lupa bahwa tidak ada air panas jadi dengan kepintaran Felix dan Leo, mereka membuat kopi menggunakan air yang tidak hangat jadi air normal. Kemudian di coba lah oleh Leo, dan ternyata tidak enak dan akhirnya saya dan Leo pun tertawa', image: kopidimalam },
    { id: 4, title: 'Guling-guling Ekayana', content: 'Pada suatu hari di Vihara Ekayana, saat sedang ikut volunteer di bidang Perlengkapan atau perkap di jam 3 untuk memasang karpet. saya, Hernando, Lionel, Stella, Austin, dan Lauren saat pekerjaan saya sudah selesai memasang karpet, tiba - tiba Hernando, Austin dan Lionel kepikiran untuk guling - guling di karpet yang sudah di pasang. Karena jalan di Vihara Ekayana ada seperti tanjakan jadi bisa di pakai untuk guling - guling dan akhirnya pun kita guling-guling lalu di videokan dan di kirim ke grup', image: gulingguling },
    { id: 5, title: 'Meja Patah', content: 'Pada suatu hari di Greenlake, Kejadian ini terjadi pad saat kami jamkos, Xues, Lionel, Hernando dan beberapa teman saya panco di meja, kemudian meja tersebut menjadi patah (bengkok )akibat terlalu ditekan hingga kami panik dan di sertai ketawa, lalu kita di tegur Pak Ivan.', image: mejapatah },
    { id: 6, title: 'Kejadian Setelah Paskib', content: 'Pada suatu hari setelah eskul Paskib, pada saat itu kami pulang menuju ke rumah bersama Saya, Wilbert, Hernando dan Stevanus. Perjalanan pulang ini menjadi perjalanan terasik karena pulang Hujan - Hujanan sehingga baju felix dan Wilbert basah kuyup, Stevanus sudah seperti orang yang sedang mandi karena basah.', image: hujan },
    { id: 7, title: 'Stevanus Iseng', content: 'Pada suatu hari, kejadian ini terjadi saat kami sedang paskib, tiba - tiba Stevanus balik ke lapangan dengan santainya dan Ko Chris melihat Stevanus dan memanggil untuk di beri hukuman dengan Push - up 50x sehingga kami tertawa terbahak - bahak.', image: pushup },
    { id: 8, title: 'Batagor Ekayana', content: 'Kejadian ini terjadi di Vihara Ekayana, saat Wirya lapar, Hernando, Saya menemani Wirya membeli Batagor. Wirya pertama memakannya di luar, Namun karena Wirya sudah kenyang dia pun masukkan ke tasnya, lalu kita masuk ke Ekayana. Lalu tidak lama setelah kita memasuki Ekayana, Wirya pun menghabisi batagornya di dekat ruang serbaguna.', image: batagor },
    { id: 9, title: 'Bola Basket', content: 'Pada Suatu hari, Terdapat sebuah kejadian yang terjadi di Sekolah, pada saat itu Stevanus bermain bola basket di kelas, dribble bola basket yang sangat berisik. Kita di peringati oleh Pak Guna ( orang yayasan ) untuk tidak dribble atau di ambil bolanya. Keesokan harinya Stevanus bermain bola di pagi hari dan kena sita. Saya tertawa terbahak - bahak. Kemudian Stevanus ke atas bersama Pak Ivan untuk mengambil bolanya Kembali.', image: basket },
    { id: 10, title: 'Kejadian Kentut di Cetya', content: 'Pada suatu hari, terjadi sebuah kejadian di mana pada hari itu kita sedang LDKS, saat LDKS tersebut kami sedang di cetya dan berkumpul Bersama dengan kelas-kelas lain. Namun, siapa sangka pada saat di Cetya Ken Adrian tiba-tiba kentut tanpa sengaja, Kami pun tertawa mendengarnya', image: kentut },
    { id: 11, title: 'Lidah Kegigit', content: 'Pada Suatu Hari terdapat sebuah kejadian di mana pada saat itu saya sedang bermain basket Bersama Stevanus, Saya sedang menjaga Stevanus namun tanpa saya sadari Stevanus meloncat, dan Saat dia meloncat, Pundaknya terkena dagu saya dan lidah saya pun tergigit', image: lidahgigit },
    { id: 12, title: 'Kejadian Jatuh dari Motor', content: 'Pada suatu malam, saya sedang pergi mengendarai motor. Pada saat itu cuaca sedang buruk di mana turun hujan kecil, Namun pada saat itu di depan saya terdapat bapak-bapak yang mengendarai motor juga, Ia mengsen (Mengkode) untuk bleok ke kiri, Namun ternyata ia mengrem mendadak, dan saya pun terjatuh karena itu.', image: jatuhDariMotor },
    { id: 13, title: 'Kejadian Bertemu Jambret', content: 'Pada suatu siang, saya sedang pergi ke Pancorann, nah pada saat saya ingin pulang tiba-tiba terdapat 2 orang mengendarai motor Bersama di mana ia mendekati seseorang yang sedang berjalan kaki, Pertama saya pikir mereka temenan, Ternyata 2 orang tersebut adalah Jambret, 2 orang tersebut berhasil mengambil Kalung Emas dari orang yang sedang berjalan tersebut.', image: jambret },
    // Add more stories with different images as needed
];

function Newpage() {
    const [selectedStoryId, setSelectedStoryId] = useState(null);

    const handleStoryClick = (storyId) => {
        setSelectedStoryId(storyId);
    };

    const closePopup = () => {
        setSelectedStoryId(null);
    };

    return (
        <>
            <motion.div className='content-story'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 3 }}
            >
                <Header />
                <div className="mainbody">
                    {stories.map((story) => (
                        <div className="gridcontainer" key={story.id}>
                            <a href="#" onClick={() => handleStoryClick(story.id)}>
                                <div className="imagegrid">
                                    <img src={story.image} alt="Placeholder image" className="" />
                                </div>
                                <div className="textgrid">{story.title}</div>
                            </a>
                        </div>
                    ))}
                </div>

                {selectedStoryId && (
                    <div className="story-popup">
                        <button onClick={closePopup}>&times;</button>
                        <h2>{stories.find((story) => story.id === selectedStoryId)?.title}</h2>
                        <p>{stories.find((story) => story.id === selectedStoryId)?.content}</p>
                    </div>
                )}

                {selectedStoryId && ( // Apply blur effect when popup is open
                    <div className="popup-overlay" onClick={closePopup}></div>
                )}
            </motion.div>
        </>
    );
}

export default Newpage;
