import React from 'react';
import { Link } from 'react-router-dom';

function CreateTicket() {
    return ( 
    <div className='container'>
        <div className='row p-5 mt-5 mb-5'>
            <h1>To create a ticket, select a relevant topic</h1>

            {/* Account Opening */}
            <div className='col-4 p-5 mt-2 mb-2'>
                <h4 className='fs-6'>
                    <i className="fa fa-plus"></i> Account Opening
                </h4>

                <Link to="/online-account" className="text-decoration-none d-block">Online Account Opening</Link>
                <Link to="/offline-account" className="text-decoration-none d-block">Offline Account Opening</Link>
                <Link to="/huf-account" className="text-decoration-none d-block">Company, Partnership and HUF Account Opening</Link>
                <Link to="/nri-account" className="text-decoration-none d-block">NRI Account Opening</Link>
                <Link to="/charges" className="text-decoration-none d-block">Charges at Zerodha</Link>
                <Link to="/idfc-account" className="text-decoration-none d-block">Zerodha IDFC FIRST Bank 3-in-1 Account</Link>
                <Link to="/getting-started" className="text-decoration-none d-block">Getting Started</Link>
            </div>

            {/* Account */}
            <div className='col-4 p-5 mt-2 mb-2'>
                <h4 className='fs-6'>
                    <i className="fa fa-user"></i> Your Zerodha Account
                </h4>

                <Link to="/login" className="text-decoration-none d-block">Login Credentials</Link>
                <Link to="/account-modification" className="text-decoration-none d-block">Account Modification and Segment Addition</Link>
                <Link to="/dp-details" className="text-decoration-none d-block">DP ID bank details</Link>
                <Link to="/profile" className="text-decoration-none d-block">Your Profile</Link>
                <Link to="/transfer-shares" className="text-decoration-none d-block">Transfer and conversion of shares</Link>
            </div>

            {/* Trading */}
            <div className='col-4 p-5 mt-2 mb-2'>
                <h4 className='fs-6'>
                    <i className="fa fa-bar-chart"></i> Trading
                </h4>

                <Link to="/margin" className="text-decoration-none d-block">Margin/leverage, Product and Order types</Link>
                <Link to="/kite" className="text-decoration-none d-block">Kite Web and Mobile</Link>
                <Link to="/trading-faq" className="text-decoration-none d-block">Trading FAQs</Link>
                <Link to="/corporate-actions" className="text-decoration-none d-block">Corporate Actions</Link>
                <Link to="/sentinel" className="text-decoration-none d-block">Sentinel</Link>
                <Link to="/kite-api" className="text-decoration-none d-block">Kite API</Link>
                <Link to="/pi" className="text-decoration-none d-block">Pi and other platforms</Link>
            </div>

            {/* Funds */}
            <div className='col-4 p-5 mt-2 mb-2'>
                <h4 className='fs-6'>
                    <i className="fa fa-credit-card"></i> Funds
                </h4>

                <Link to="/add-funds" className="text-decoration-none d-block">Adding Funds</Link>
                <Link to="/withdraw" className="text-decoration-none d-block">Funds Withdrawal</Link>
                <Link to="/emandates" className="text-decoration-none d-block">eMandates</Link>
                <Link to="/bank-account" className="text-decoration-none d-block">Adding Bank Account</Link>
            </div>

            {/* Console */}
            <div className='col-4 p-5 mt-2 mb-2'>
                <h4 className='fs-6'>
                    <i className="fa fa-circle-o-notch"></i> Console
                </h4>

                <Link to="/reports" className="text-decoration-none d-block">Reports</Link>
                <Link to="/leader" className="text-decoration-none d-block">Leader</Link>
                <Link to="/portfolio" className="text-decoration-none d-block">Portfolio</Link>
                <Link to="/ipo" className="text-decoration-none d-block">IPO</Link>
                <Link to="/referral" className="text-decoration-none d-block">Referral Program</Link>
            </div>

            {/* Coin */}
            <div className='col-4 p-5 mt-2 mb-2'>
                <h4 className='fs-6'>
                    <i className="fa fa-circle-o"></i> Coin
                </h4>

                <Link to="/mutual-funds" className="text-decoration-none d-block">Understanding Mutual Funds</Link>
                <Link to="/coin" className="text-decoration-none d-block">About Coin</Link>
                <Link to="/sip" className="text-decoration-none d-block">Starting an SIP</Link>
                <Link to="/government-securities" className="text-decoration-none d-block">Government Securities</Link>
            </div>

        </div>
    </div>
    );
}

export default CreateTicket;