import React, { useState, useEffect } from 'react';

const ReferralPage = () => {
  const [referralCode, setReferralCode] = useState('');
  const [userReferralCode, setUserReferralCode] = useState('');

  // Generate and store a unique referral code when a user first visits
  useEffect(() => {
    // Check if the user has already been assigned a referral code
    let userCode = localStorage.getItem('referralCode');
    
    if (!userCode) {
      // If no referral code, generate a random one (you can also use a user-specific ID here)
      userCode = 'ref-' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('referralCode', userCode);
    }

    setUserReferralCode(userCode);
  }, []);

  // Capture and store referral code from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const referrer = params.get('ref');  // This assumes the URL is like `?ref=ref-abc123`

    if (referrer && referrer !== localStorage.getItem('referralCode')) {
      localStorage.setItem('referrer', referrer);
    }
  }, []);

  // Referral Link for sharing
  const referralLink = window.location.origin + '/?ref=' + userReferralCode;

  return (
    <div>
      <h2>Referral Program</h2>
      <p>Your unique referral code is: <strong>{userReferralCode}</strong></p>
      <p>Share your referral link:</p>
      <input 
        type="text" 
        readOnly 
        value={referralLink} 
        onClick={(e) => e.target.select()} 
      />
      <p>Share it with friends and earn rewards!</p>

      {/* Check if there's a referrer stored */}
      {localStorage.getItem('referrer') && (
        <p>You were referred by: {localStorage.getItem('referrer')}</p>
      )}
    </div>
  );
};

export default ReferralPage;
