import { useState } from 'react';
import React from 'react';
import './App.css';
import {
  MyInformation,
  MyEducation,
  MyPreference,
  MySkills,
  MyAchievements,
  MyExperience,
  MyContact,
  MyProduct,
} from './data/Boxdata.jsx';
import CaNhan from './assets/CaNhan.svg';
import SoThich from './assets/SoThich.svg';
import KyNang from './assets/KyNang.svg';
import BangCap from './assets/BangCap.svg';
import ThanhTich from './assets/ThanhTich.svg';
import KinhNghiem from './assets/KinhNghiem.svg';
import LienHe from './assets/LienHe.svg';
import SanPham from './assets/SanPham.svg';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    content: [],
    color: '',
  });

  const showModal = (title, content, color) => {
    setModalContent({ title, content, color });
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div className="box">
        <h1 className="box red-box">LƯƠNG QUANG HÙNG</h1>
        <abbr title="Họ Hay Gọi Tôi Là Kudo Shinichi🌽">
          Kudo Shinichi 2003
        </abbr>
        <div className="container">
          <div
            className="box blue-gray"
            onClick={() =>
              showModal('My information', MyInformation, 'blue-gray-content')
            }
          >
            <h2>My information</h2>
            <img src={CaNhan} height="50" width="50" alt="Icont Box 1" />
            <p>Content my information.</p>
          </div>
          <div
            className="box ograne-box"
            onClick={() =>
              showModal('My preference', MyPreference, 'ograne-box-content')
            }
          >
            <h2>My preference</h2>
            <img src={SoThich} height="50" width="50" alt="Icont Box 1" />
            <p>Content my preference.</p>
          </div>
          <div
            className="box blue-beach"
            onClick={() =>
              showModal('My skills', MySkills, 'blue-beach-content')
            }
          >
            <h2>My skills</h2>
            <img src={KyNang} height="50" width="50" alt="Icont Box 1" />
            <p>Content my skills.</p>
          </div>
          <div
            className="box yellow-box"
            onClick={() =>
              showModal('My education', MyEducation, 'yellow-box-content')
            }
          >
            <h2>My education</h2>
            <img src={BangCap} height="50" width="50" alt="Icont Box 1" />
            <p>Content my education.</p>
          </div>
          <div
            className="box green-box"
            onClick={() =>
              showModal('My achievements', MyAchievements, 'green-box-content')
            }
          >
            <h2>My achievements</h2>
            <img src={ThanhTich} height="50" width="50" alt="Icont Box 1" />
            <p>Content my achievements.</p>
          </div>
          <div
            className="box purple-box"
            onClick={() =>
              showModal('My experience', MyExperience, 'purple-box-content')
            }
          >
            <h2>My experience</h2>
            <img src={KinhNghiem} height="50" width="50" alt="Icont Box 1" />
            <p>Content my experience.</p>
          </div>

          <div
            className="box pink-box"
            onClick={() =>
              showModal('My Contact', MyContact, 'pink-box-content')
            }
          >
            <h2>My Contact</h2>
            <img src={LienHe} height="50" width="50" alt="Icont Box 1" />
            <p>Content my contact.</p>
          </div>

          <div
            className="box white-box"
            onClick={() =>
              showModal('My product', MyProduct, 'white-box-content')
            }
          >
            <h2>My product</h2>
            <img src={SanPham} height="50" width="50" alt="Icont Box 1" />
            <p>Content my product.</p>
          </div>
        </div>
      </div>

      {modalVisible && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className={`modal-content ${modalContent.color}`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{modalContent.title}</h2>
            {modalContent.content.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
            <button className="button-red" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
