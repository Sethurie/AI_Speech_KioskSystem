// src/components/ItemDetailModal.jsx
import React from 'react';
import { optionOptions } from '../data';

const ItemDetailModal = ({
  activeDetailItem,
  currentOptions,
  setCurrentOptions,
  currentModalQty,
  orderQueue,
  startVoiceRecognition,
  isListening,
  handleCancelModal,
  addFinalItemToCart
}) => {
  if (!activeDetailItem) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 style={{margin: '0'}}>{activeDetailItem.name}</h2>
        {orderQueue.length > 1 && (
            <div style={{ textAlign: 'center', color: '#ff5252', fontSize: '0.8rem', fontWeight: 'bold', marginTop: '5px' }}>
                (남은 선택 항목: {orderQueue.length - 1}개)
            </div>
        )}
        <div style={{ textAlign: 'center', color: 'var(--sb-primary)', fontWeight: 'bold', fontSize: '1.2rem', margin: '15px 0' }}>
          {(activeDetailItem.price + (currentOptions.shot === "에스프레소 샷 추가 (+500원)" ? 500 : 0)).toLocaleString()}원 <span style={{color: '#888', fontSize: '0.9rem'}}>(x{currentModalQty})</span>
        </div>
        
        <div style={{display: 'flex', justifyContent: 'center', margin: '20px 0'}}>
           <button onClick={startVoiceRecognition} className={`mic-btn ${isListening ? 'listening' : ''}`} title="옵션 음성으로 선택">🎤</button>
        </div>

        {activeDetailItem.type !== 'NONE' && (
          <>
            {(activeDetailItem.type === 'BOTH' || activeDetailItem.type === 'HOT') && (
              <div className="option-group">
                <label className="option-title">온도</label>
                <div className="option-items">
                  {optionOptions.temp.map(t => (
                    <div key={t} onClick={() => setCurrentOptions(prev => ({...prev, temp: t, ice: t === 'HOT' ? '없음' : '얼음 중간'}))} className={`option-item ${currentOptions.temp === t ? 'active' : ''}`}>{t}</div>
                  ))}
                </div>
              </div>
            )}
            
            {currentOptions.temp === 'ICE' && activeDetailItem.type !== 'HOT' && (
              <div className="option-group">
                <label className="option-title">얼음량</label>
                <div className="option-items">
                  {optionOptions.ice.map(i => (
                    <div key={i} onClick={() => setCurrentOptions(prev => ({...prev, ice: i}))} className={`option-item ${currentOptions.ice === i ? 'active' : ''}`}>{i}</div>
                  ))}
                </div>
              </div>
            )}
            
            {(activeDetailItem.id >= 13 && activeDetailItem.id <= 16) || (activeDetailItem.id >= 25 && activeDetailItem.id <= 28) ? ( 
              <div className="option-group">
                <label className="option-title">당도</label>
                <div className="option-items">
                  {optionOptions.sweetness.map(s => (
                    <div key={s} onClick={() => setCurrentOptions(prev => ({...prev, sweetness: s}))} className={`option-item ${currentOptions.sweetness === s ? 'active' : ''}`}>{s}</div>
                  ))}
                </div>
              </div>
            ) : null}
            
            {(activeDetailItem.type === 'BOTH' || activeDetailItem.type === 'ICE') && ( 
              <div className="option-group">
                <label className="option-title">펄 추가</label>
                <div className="option-items">
                  {optionOptions.pearl.map(p => (
                    <div key={p} onClick={() => setCurrentOptions(prev => ({...prev, pearl: p}))} className={`option-item ${currentOptions.pearl === p ? 'active' : ''}`}>{p}</div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
        
        <div className="option-group">
          <label className="option-title">샷 추가</label>
          <div className="option-items">
            {optionOptions.shot.map(s => (
              <div key={s} onClick={() => setCurrentOptions(prev => ({...prev, shot: s}))} className={`option-item ${currentOptions.shot === s ? 'active' : ''}`}>{s}</div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', marginTop: '30px' }}>
          <button className="close-btn" style={{ flex: 1, margin: 0, padding: '15px', color: '#666', fontSize: '1.2rem', borderRadius: '10px' }} onClick={handleCancelModal}>취소</button>
          <button className="pay-btn" style={{ flex: 1, margin: 0, padding: '15px', fontSize: '1.2rem', borderRadius: '10px' }} onClick={addFinalItemToCart}>담기</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailModal;