import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
// import Tradingcourses from './Components/tradingcourses'
import HomePage from './Components/Home_Page/HomePage.jsx';
import TermsAndConditions from './Components/Terms_And_Conditions/TermsAndConditions.jsx'
import PrivacyPolicy from './Components/Privacy_Policy/PrivacyPolicy.jsx'
import Refundpolicy from './Components/RefundPolicy/Refundpolicy.jsx'
import CookiesPolicy from './Components/CookiePolicy/CookiesPolicy.jsx'
import ContactUs from './Components/Contact_Us/ContactUs.jsx';
import Login from './Components/login'
import Header from './Components/Header'
import CheckoutPage from './Components/CheckoutPage/Checkout.jsx';


// import AuthenticatedHeader from './Components/Header/AuthenticatedHeader.jsx';
// import LogoutHeader from './Components/Header/LogoutHeader.jsx';

import Carousel from './Components/Carausel/carausel.jsx';

import Footer from './Components/Footer'
import ForgotPassword from './Components/Forgot_Password/ForgotPassword.jsx';
import CryptocurrencyCalendar from './Components/Cryptocurrency Calendar/CryptocurrencyCalendar.jsx'
import Courses from './Components/courses'
import BeginerGuideToTrading from './Components/Beginers Guide To Trading/BeginerGuideToTrading.jsx'
import EconomicCalendar from './Components/Economic Calendar/EconomicCalendar.jsx'
import TechnicalAnalysis from './Components/Technical Analysis Article/TechnicalAnalysis.jsx'
import MarketSignal from './Components/Market Signal/MarketSignal.jsx'
import MarketNews from './Components/Market News/MarketNews.jsx'
import MarketVideos from './Components/Market Research Videos/MarketVideos.jsx'
import Forex from './Components/Trading_Essential/Forex.jsx';
import TradingEssential from './Components/video_courses/TradingEssential.jsx';
import Cfd from './Components/Trading_Essential/Cfd.jsx';
import Commodity from './Components/Trading_Essential/commodity.jsx';
import Index from './Components/Trading_Essential/Index.jsx';
import Share from './Components/Trading_Essential/Share.jsx';
import PpAndT from './Components/Trading_Essential/PpAndT.jsx';
import BalanceAndEquity from './Components/Trading_Essential/BalanceAndEquity.jsx';
import BullAndBear from './Components/Trading_Essential/BullAndBear.jsx';
import Lots from './Components/Trading_Essential/Lots.jsx';
import BidAndAsk from './Components/Trading_Essential/BidAndAsk.jsx';
import ShortAndLongPositions from './Components/Trading_Essential/ShortAndLongPositions.jsx';
import StopLossAndTakeProfit from './Components/Trading_Essential/StopLossAndTakeProfit.jsx';
import PendingOrders from './Components/Trading_Essential/PendingOrders.jsx';
import LeverageAndMargins from './Components/Trading_Essential/LeverageAndMargins.jsx';
import ChartTypes from './Components/Trading_Essential/ChartTypes.jsx';
import TradingEmotionally from './Components/Trading_Essential/TradingEmotionally.jsx';
import AveragingDown from './Components/Trading_Essential/AveragingDown.jsx';
import TradingWithoutRiskControl from './Components/Trading_Essential/TradingWithoutRiskControl.jsx';
import NotFollowingAPlan from './Components/Trading_Essential/NotFollowingAPlan.jsx';
import ECN from './Components/Trading_Essential/ECN.jsx';
import EcnBrokersDifferent from './Components/Trading_Essential/EcnBrokersDifferent.jsx';
import AdvantageOfEcn from './Components/Trading_Essential/AdvantageOfEcn.jsx';
import Cryptocurrency from './Components/Trading_Essential/Cryptocurrency.jsx';
import Stablecoins from './Components/Trading_Essential/Stablecoins.jsx';
import BlockChain from './Components/Trading_Essential/BlockChain.jsx';
import Mining from './Components/Trading_Essential/Mining.jsx';
import Stacking from './Components/Trading_Essential/Staking.jsx';
import CoinsAndTokens from './Components/Trading_Essential/CoinsAndTokens.jsx';
import Forks from './Components/Trading_Essential/Forks.jsx';
import Bitcoin from './Components/Trading_Essential/Bitcoin.jsx';
import Ethereum from './Components/Trading_Essential/Ethereum.jsx';
import Ripple from './Components/Trading_Essential/Ripple.jsx';
import Tether from './Components/Trading_Essential/Tether.jsx';
import Dogecoin from './Components/Trading_Essential/Dogecoin.jsx';
import ALternativeCryptocurrencies from './Components/Trading_Essential/ALternativeCryptocurrencies.jsx';
import ToTradeOrToInvest from './Components/Trading_Essential/ToTradeOrToInvest.jsx';
import TradeCryptocurrency from './Components/Trading_Essential/TradeCryptocurrency.jsx';
import RiskOfTradingCrypto from './Components/Trading_Essential/RiskOfTradingCypto.jsx';
import InvestInCryptocurrency from './Components/Trading_Essential/InvestInCryptocurrency.jsx';
import RiskOfInvestingInCrypto from './Components/Trading_Essential/RiskOfInvestingInCrypto.jsx';
import ICO from './Components/Trading_Essential/ICO.jsx';
import NFT from './Components/Trading_Essential/NFT.jsx';
import WhatsAWallet from './Components/Trading_Essential/WhatsAWallet.jsx';
import HotWallet from './Components/Trading_Essential/HotWallet.jsx';
import ColdWallet from './Components/Trading_Essential/ColdWallet.jsx';
import ChooseTheRightWallet from './Components/Trading_Essential/ChooseTheRightWallet.jsx';
// import QuizComponent from './Components/QuizComponent.jsx';

import MetaTrader5Mobile from './Components/video_courses/MetaTrader5Mobile.jsx';
import IphoneApplicationOverview from './Components/MetaTrading_5_Mobile/IphoneApplicationOverview.jsx';
import IphoneLoginExistingAccount from './Components/MetaTrading_5_Mobile/IphoneLoginExistingAccount.jsx';
import IphoneOpeningAnOrder from './Components/MetaTrading_5_Mobile/IphoneOpeningAnOrder.jsx';
import IphonePendingOrder from './Components/MetaTrading_5_Mobile/IphonePendingOrder.jsx';
import IphoneClosingAnOrder from './Components/MetaTrading_5_Mobile/IphoneClosingAnOrder.jsx';
import IphoneStopLossTakeProfit from './Components/MetaTrading_5_Mobile/IphoneStopLossTakeProfit.jsx';
import IphoneOnClickTrading from './Components/MetaTrading_5_Mobile/IphoneOnClickTrading.jsx';
import IphoneIndicatorToChart from './Components/MetaTrading_5_Mobile/IphoneIndicatorToChart.jsx';
import AndroidApplicationOverview from './Components/MetaTrading_5_Mobile/AndroidApplicationOverview.jsx';
import AndroidLoginExistingAccount from './Components/MetaTrading_5_Mobile/AndroidLoginExistingAccount.jsx';
import AndroidOpeningAnOrder from './Components/MetaTrading_5_Mobile/AndroidOpeningAnOrder.jsx';
import AndroidPendingOrder from './Components/MetaTrading_5_Mobile/AndroidPendingOrder.jsx';
import AndroidClosingOrder from './Components/MetaTrading_5_Mobile/AndroidClosingOrder.jsx';
import AndroidStopLossTakeProfit from './Components/MetaTrading_5_Mobile/AndroidStopLossTakeProfit.jsx';
import AndroidOnClickTrading from './Components/MetaTrading_5_Mobile/AndroidOnClickTrading.jsx';
import AndroidIndicatorToChart from './Components/MetaTrading_5_Mobile/AndroidIndicatorToChart.jsx';
import MetaTrader5 from './Components/video_courses/MetaTrader5.jsx';
import WhatNewInMetaTrading5 from './Components/Metrading_5/WhatNewInMetaTrading5.jsx';
import ApplicationOverview from './Components/Metrading_5/ApplicationOverview.jsx';
import CreatingAdemoAccount from './Components/Metrading_5/CreatingAdemoAccount.jsx';
import OpeningAnOrder from './Components/Metrading_5/OpeningAnOrder.jsx';
import CreatingAPendingOrder from './Components/Metrading_5/CreatingAPendingOrder.jsx';
import ClosingAnOrder from './Components/Metrading_5/ClosingAnOrder.jsx';
import MetaTrading5StopLossAndTakeProfit from './Components/Metrading_5/MetaTrading5StopLossAndTakeProfit.jsx';
import UsingATrailedStop from './Components/Metrading_5/UsingATrailedStop.jsx';
import OneClickTrading from './Components/Metrading_5/OneClickTrading.jsx';
import AddingIndicatorsToChart from './Components/Metrading_5/AddingIndicatorsToChart.jsx';
import UsingGraphicalMarkuptool from './Components/Metrading_5/UsingGraphicalMarkuptool.jsx';
import CustomizeYourWorkSpace from './Components/Metrading_5/CustomizeYourWorkSpace.jsx';
import AlgorthmeicTrading from './Components/Metrading_5/AlgorthmeicTrading.jsx';
import MetaTrader4 from './Components/video_courses/MetaTrader4.jsx';
import TerminalWindow from './Components/MetaTraing_4/TerminalWindow.jsx';
import MetaOpeningAnOrder from './Components/MetaTraing_4/MetaOpeningAnOrder.jsx';
import Meta4CreatingAPendingOrder from './Components/MetaTraing_4/Meta4CreatingAPendingOrder.jsx';
import Meta4ClosingAnOrder from './Components/MetaTraing_4/Meta4ClosingAnOrder.jsx';
import Meta4StopLossAndTakeProfit from './Components/MetaTraing_4/Meta4StopLossAndTakeProfit.jsx';
import Meta4UsingATrainlingStop from './Components/MetaTraing_4/Meta4UsingATrainlingStop.jsx';
import Meta4OneClickTrading from './Components/MetaTraing_4/Meta4OneClickTrading.jsx';
import Meta4AddingIndicatorsToChart from './Components/MetaTraing_4/Meta4AddingIndicatorsToChart.jsx';
import StrategicTrading from './Components/video_courses/StrategicTrading.jsx';

import CandlesticAnalysis from './Components/Strategic_Trading/CandlesticAnalysis.jsx';
import BenefitCandlestic from './Components/Strategic_Trading/BenefitCandlestic.jsx';
import CandlesticStrecture from './Components/Strategic_Trading/CandlesticStrecture.jsx';
import Doji from './Components/Strategic_Trading/Doji.jsx';
import LongLeggedDogi from './Components/Strategic_Trading/LongLeggedDogi.jsx';
import TradeTheLongLeggedDogi from './Components/Strategic_Trading/TradeTheLongLeggedDogi.jsx';
import GraveStoneDojiAndDragonflyDogi from './Components/Strategic_Trading/GraveStoneDojiAndDragonflyDogi.jsx';
import TradeGraveStoneDojiAndDragonflyDogi from './Components/Strategic_Trading/TradeGraveStoneDojiAndDragonflyDogi.jsx';
import ShootingStarAndInvertedHammer from './Components/Strategic_Trading/ShootingStarAndInvertedHammer.jsx';
import TradeShootingStarAndInvertedHammer from './Components/Strategic_Trading/TradeShootingStarAndInvertedHammer.jsx';
import DarkCloudCover from './Components/Strategic_Trading/DarkCloudCover.jsx';
import TradeDarkCloudCover from './Components/Strategic_Trading/TradeDarkCloudCover.jsx';
import WhiteSoldierAndBlackCrows from './Components/Strategic_Trading/WhiteSoldierAndBlackCrows.jsx';
import TradeWhiteSoldierAndBlackCrows from './Components/Strategic_Trading/TradeWhiteSoldierAndBlackCrows.jsx';
import MorningStarAndEveningStar from './Components/Strategic_Trading/MorningStarAndEveningStar.jsx';
import TradeMorningStarAndEveningStar from './Components/Strategic_Trading/TradeMorningStarAndEveningStar.jsx';
import HarmonicPrice from './Components/Strategic_Trading/HarmonicPrice.jsx';
import ABCD from './Components/Strategic_Trading/ABCD.jsx';
import GartleyPattern from './Components/Strategic_Trading/GartleyPattern.jsx';
import BatPattern from './Components/Strategic_Trading/BatPattern.jsx';
import CrabPattern from './Components/Strategic_Trading/CrabPattern.jsx';
import ButterflyPattern from './Components/Strategic_Trading/ButterflyPattern.jsx';
import SharkPattern from './Components/Strategic_Trading/SharkPattern.jsx';
import CypherPattern from './Components/Strategic_Trading/CypherPattern.jsx';
import ThreeDrivesPattern from './Components/Strategic_Trading/ThreeDrivesPattern.jsx';
import WolfWavePattern from './Components/Strategic_Trading/WolfWavePattern.jsx';
import TradingStrategy from './Components/Strategic_Trading/TradingStrategy.jsx';
import PopNDropN from './Components/Strategic_Trading/PopNDropN.jsx';
import TradePopNDropN from './Components/Strategic_Trading/TradePopNDropN.jsx';
import BladeRunner from './Components/Strategic_Trading/BladeRunner.jsx';
import TradeBladeRunner from './Components/Strategic_Trading/TradeBladeRunner.jsx';
import BollyBandBounce from './Components/Strategic_Trading/BollyBandBounce.jsx';
import TradeBollyBandBounce from './Components/Strategic_Trading/TradeBollyBandBounce.jsx';
import FibonacciPivot from './Components/Strategic_Trading/FibonacciPivot.jsx';
import TradeFibonacciPivot from './Components/Strategic_Trading/TradeFibonacciPivot.jsx';
import LondanHammer from './Components/Strategic_Trading/LondanHammer.jsx';
import TradeMarketOpens from './Components/Strategic_Trading/TradeMarketOpens.jsx';
import ForexFractal from './Components/Strategic_Trading/ForexFractal.jsx';
import TradeForexFractal from './Components/Strategic_Trading/TradeForexFractal.jsx';
import FibonacciTrading from './Components/Strategic_Trading/FibonacciTrading.jsx';
import FibonacciRetracement from './Components/Strategic_Trading/FibonacciRetracement.jsx';
import TradeFibonacciRetracement from './Components/Strategic_Trading/TradeFibonacciRetracement.jsx';
import TradeFibonacciExtensions from './Components/Strategic_Trading/TradeFibonacciExtensions.jsx';
import FibonacciTools from './Components/Strategic_Trading/FibonacciTools.jsx';
import FibonacciTradingStrategy from './Components/Strategic_Trading/FibonacciTradingStrategy.jsx';
import ElliotWave from './Components/Strategic_Trading/ElliotWave.jsx';
import ImpulseWave from './Components/Strategic_Trading/ImpulseWave.jsx';
import CorrectiveWave from './Components/Strategic_Trading/CorrectiveWave.jsx';
import FractalNatureOfElliotWave from './Components/Strategic_Trading/FractalNatureOfElliotWave.jsx';
import TradeElliotWave from './Components/Strategic_Trading/TradeElliotWave.jsx';
import RulesOfUsingElliotWave from './Components/Strategic_Trading/RulesOfUsingElliotWave.jsx';
import HighProbabilitySetup from './Components/Strategic_Trading/HighProbabilitySetup.jsx';

import TechnicalTrading from './Components/video_courses/TechnicalTrading.jsx';







// import AuthenticatedHeader from './Components/Header/AuthenticatedHeader.jsx'
// import LogoutHeader from './Components/Header/LogoutHeader.jsx'
// import AdvancedGuideToTrading from './Components/Advanced_Guide_To_Trading_ebook/AdvancedGuideToTrading.jsx';




function App() {
  const [count, setCount] = useState(0)
  const [authenticated, setAuthenticated] = useState(localStorage.getItem("isAuthenticated"));

  const shouldShowHeader = ![
    // '/courses',
    // '/Crypto-calendar',
    // '/Economic-calendar',
    // '/Technical-Analysis-article',
    // '/Market-signal',
    // '/Market-news',
    // '/Market-videos',
    // '/beginners-guide-to-trading-ebook',
    // '/advanced-guide-to-trading-ebook',
  ].includes(location.pathname);

  return (
    <div>


 {shouldShowHeader && <Header authenticated={localStorage.getItem("isAuthenticated")} />}





    <Router>
    {/* <Navigation /> */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/carausel" element={<Carousel />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/beginners-guide-to-trading-ebook" element={<BeginerGuideToTrading />} />
      {/* <Route path="/advanced-guide-to-trading-ebook" element={<AdvancedGuideToTrading />} /> */}
      <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
      <Route path="/Forgot-Password" element={<ForgotPassword />} />

{/*-----------------------------Market research--------------------------------*/}

      <Route path="/Crypto-calendar" element={<CryptocurrencyCalendar  />} />
      <Route path="/Economic-calendar" element={<EconomicCalendar  />} />
      <Route path="/Technical-Analysis-article" element={<TechnicalAnalysis  />} />
      <Route path="/Market-signal" element={<MarketSignal  />} />
      <Route path="/Market-news" element={<MarketNews />} />
      <Route path="/Market-videos" element={<MarketVideos />} />

{/*-----------------------------Footer--------------------------------*/}

      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/cookie" element={<CookiesPolicy />} />
      <Route path="/Refund" element={<Refundpolicy />} />
      <Route path="/Terms-and-conditions" element={<TermsAndConditions/>} />
      <Route path="/Privacy-policy" element={<PrivacyPolicy/>} />


{/*-----------------------------Checkout-page--------------------------------*/}


      <Route path="/Checkout-page" element={<CheckoutPage />} />

{/*-----------------------------Video courses--------------------------------*/}



      <Route path="/courses/trading-essential" element={<TradingEssential />} />
      <Route path="/courses/meta-trader-5-mobile" element={<MetaTrader5Mobile />} />
      <Route path="/courses/meta-trader-5" element={<MetaTrader5 />} />
      <Route path="/courses/meta-trader-4" element={<MetaTrader4 />} />
      <Route path="/courses/strategic-trading" element={<StrategicTrading />} />
      <Route path="/courses/technical-trading" element={<TechnicalTrading />} />

      <Route path="/courses/trading-essential/what-is-forex" element={<Forex />} />
      <Route path="/courses/trading-essential/what's-a-cfd" element={<Cfd />} />
      <Route path="/courses/trading-essential/what’s-a-commodity" element={<Commodity />} />
      <Route path="/courses/trading-essential/what’s-an-index" element={<Index />} />
      <Route path="/courses/trading-essential/what’s-a-share" element={<Share />} />
      <Route path="/courses/trading-essential/balance-and-equity" element={<BalanceAndEquity />} />
      <Route path="/courses/trading-essential/pips,-points,-and-ticks" element={<PpAndT />} />
      <Route path="/courses/trading-essential/bull-and-bear-market" element={<BullAndBear />} />
      <Route path="/courses/trading-essential/lots" element={<Lots />} />
      <Route path="/courses/trading-essential/bid-and-ask-prices" element={<BidAndAsk />} />
      <Route path="/courses/trading-essential/short-and-long-positions" element={<ShortAndLongPositions />} />
      <Route path="/courses/trading-essential/stop-loss-and-take-profit" element={<StopLossAndTakeProfit />} />
      <Route path="/courses/trading-essential/pending-orders" element={<PendingOrders />} />
      <Route path="/courses/trading-essential/leverage-and-margin" element={<LeverageAndMargins />} />
      <Route path="/courses/trading-essential/chart-types" element={<ChartTypes />} />
      <Route path="/courses/trading-essential/trading-emotionally" element={<TradingEmotionally  />} />
      <Route path="/courses/trading-essential/averaging-down" element={<AveragingDown />} />
      <Route path="/courses/trading-essential/trading-without-risk-control" element={<TradingWithoutRiskControl />} />
      <Route path="/courses/trading-essential/not-following-a-plan" element={<NotFollowingAPlan  />} />
      <Route path="/courses/trading-essential/what-is-ecn" element={<ECN  />} />
      <Route path="/courses/trading-essential/how-are-ecn-brokers-different" element={<EcnBrokersDifferent   />} />
      <Route path="/courses/trading-essential/advantages-of-ecn" element={<AdvantageOfEcn  />} />
      <Route path="/courses/trading-essential/what’s-a-cryptocurrency" element={<Cryptocurrency  />} />
      <Route path="/courses/trading-essential/stablecoins" element={<Stablecoins  />} />
      <Route path="/courses/trading-essential/blockchain" element={<BlockChain  />} />
      <Route path="/courses/trading-essential/-mining" element={<Mining  />} />
      <Route path="/courses/trading-essential/staking" element={<Stacking  />} />
      <Route path="/courses/trading-essential/coins-and-tokens" element={<CoinsAndTokens  />} />
      <Route path="/courses/trading-essential/forks" element={<Forks  />} />
      <Route path="/courses/trading-essential/bitcoin" element={<Bitcoin  />} />
      <Route path="/courses/trading-essential/ethereum" element={<Ethereum  />} />
      <Route path="/courses/trading-essential/ripple" element={<Ripple />} />
      <Route path="/courses/trading-essential/tether" element={<Tether  />} />
      <Route path="/courses/trading-essential/dogecoin" element={<Dogecoin  />} />
      <Route path="/courses/trading-essential/alternative-cryptocurrencies" element={<ALternativeCryptocurrencies  />} />
      <Route path="/courses/trading-essential/to-trade-or-to-invest" element={<ToTradeOrToInvest  />} />
      <Route path="/courses/trading-essential/how-to-trade-cryptocurrency" element={<TradeCryptocurrency  />} />
      <Route path="/courses/trading-essential/risks-of-trading-crypto" element={<RiskOfTradingCrypto  />} />
      <Route path="/courses/trading-essential/how-to-invest-in-cryptocurrency" element={<InvestInCryptocurrency  />} />
      <Route path="/courses/trading-essential/risks-of-investing-in-crypto" element={<RiskOfInvestingInCrypto  />} />
      <Route path="/courses/trading-essential/ico" element={<ICO   />} />
      <Route path="/courses/trading-essential/nft" element={<NFT />} />
      <Route path="/courses/trading-essential/what's-a-wallet" element={<WhatsAWallet  />} />
      <Route path="/courses/trading-essential/hot-wallet" element={<HotWallet  />} />
      <Route path="/courses/trading-essential/cold-wallet" element={<ColdWallet  />} />
      <Route path="/courses/trading-essential/how-to-choose-the-right-wallet" element={<ChooseTheRightWallet  />} />


{/*-----------------------------MetaTrading 5 Mobile--------------------------------*/}

      <Route path="/courses/meta-trader-5-mobile/application-overview-in-iphone" element={<IphoneApplicationOverview />} />
      <Route path="/courses/meta-trader-5-mobile/logging-in-to-an-existing-account-in-iphone" element={<IphoneLoginExistingAccount />} />
      <Route path="/courses/meta-trader-5-mobile/opening-an-order-in-iphone" element={<IphoneOpeningAnOrder/>} />
      <Route path="/courses/meta-trader-5-mobile/creating-a-pending-order-in-iphone" element={<IphonePendingOrder />} />
      <Route path="/courses/meta-trader-5-mobile/closing-an-order-in-iphone" element={<IphoneClosingAnOrder />} />
      <Route path="/courses/meta-trader-5-mobile/setting-a-stop-loss-and-take-profit-in-iphone" element={<IphoneStopLossTakeProfit />} />
      <Route path="/courses/meta-trader-5-mobile/one-click-trading-in-iphone" element={<IphoneOnClickTrading />} />
      <Route path="/courses/meta-trader-5-mobile/adding-indicators-to-the-chart-in-iphone" element={<IphoneIndicatorToChart />} />


      <Route path="/courses/meta-trader-5-mobile/application-overview-in-Android" element={<AndroidApplicationOverview />} />
      <Route path="/courses/meta-trader-5-mobile/logging-in-to-an-existing-account-in-android" element={<AndroidLoginExistingAccount />} />
      <Route path="/courses/meta-trader-5-mobile/opening-an-order-in-android" element={<AndroidOpeningAnOrder/>} />
      <Route path="/courses/meta-trader-5-mobile/creating-a-pending-order-in-android" element={<AndroidPendingOrder />} />
      <Route path="/courses/meta-trader-5-mobile/closing-an-order-in-android" element={<AndroidClosingOrder />} />
      <Route path="/courses/meta-trader-5-mobile/setting-a-stop-loss-and-take-profit-in-android" element={<AndroidStopLossTakeProfit />} />
      <Route path="/courses/meta-trader-5-mobile/one-click-trading-in-android" element={<AndroidOnClickTrading />} />
      <Route path="/courses/meta-trader-5-mobile/adding-indicators-to-the-chart-in-android" element={<AndroidIndicatorToChart />} />


{/*-----------------------------MetaTrading 5 --------------------------------*/}


      <Route path="/courses/meta-trader-5/what's-new-in-metatrader-5" element={<WhatNewInMetaTrading5 />} /> 
      <Route path="/courses/meta-trader-5/application-overview" element={<ApplicationOverview />} /> 
      <Route path="/courses/meta-trader-5/creating-a-demo-account" element={<CreatingAdemoAccount />} /> 
      <Route path="/courses/meta-trader-5/opening-an-order" element={<OpeningAnOrder />} /> 
      <Route path="/courses/meta-trader-5/creating-a-pending-order" element={<CreatingAPendingOrder />} /> 
      <Route path="/courses/meta-trader-5/closing-an-order" element={<ClosingAnOrder />} /> 
      <Route path="/courses/meta-trader-5/setting-a-stop-loss-and-take-profit" element={<StopLossAndTakeProfit />} /> 
      <Route path="/courses/meta-trader-5/using-a-trailing-stop" element={<UsingATrailedStop />} /> 
      <Route path="/courses/meta-trader-5/one-click-trading" element={<OneClickTrading />} /> 
      <Route path="/courses/meta-trader-5/adding-indicators-to-the-chart" element={<AddingIndicatorsToChart />} /> 
      <Route path="/courses/meta-trader-5/using-graphical-markup-tools" element={<UsingGraphicalMarkuptool />} /> 
      <Route path="/courses/meta-trader-5/customizing-your-workspace" element={<CustomizeYourWorkSpace />} /> 
      <Route path="/courses/meta-trader-5/algorithmic-trading" element={<AlgorthmeicTrading />} /> 


{/*-----------------------------MetaTrader 4 --------------------------------*/}

      <Route path="/courses/meta-trader-4/terminal-window" element={<TerminalWindow />} /> 
      <Route path="/courses/meta-trader-4/opening-an-order" element={<MetaOpeningAnOrder />} /> 
      <Route path="/courses/meta-trader-4/creating-a-pending-order" element={<Meta4CreatingAPendingOrder />} /> 
      <Route path="/courses/meta-trader-4/closing-an-order" element={<Meta4ClosingAnOrder />} /> 
      <Route path="/courses/meta-trader-4/setting-a-stop-loss-and-take-profit" element={<Meta4StopLossAndTakeProfit />} /> 
      <Route path="/courses/meta-trader-4/using-a-trailing-stop" element={<Meta4UsingATrainlingStop />} /> 
      <Route path="/courses/meta-trader-4/one-click-trading" element={<Meta4OneClickTrading />} /> 
      <Route path="/courses/meta-trader-4/adding-indicators-to-the-chart" element={<Meta4AddingIndicatorsToChart />} /> 



{/*-----------------------------Strategic Trading --------------------------------*/}


      <Route path="/courses/strategic-trading/history-of-japanese-candlestick-analysis" element={<CandlesticAnalysis />} />
      <Route path="/courses/strategic-trading/benefits-of-using-candlesticks" element={<BenefitCandlestic />} />
      <Route path="/courses/strategic-trading/candlestick-structure" element={<CandlesticStrecture />} />
      <Route path="/courses/strategic-trading/doji" element={<Doji  />} />
      <Route path="/courses/strategic-trading/the-long-legged-doji-and-the-high-wave" element={<LongLeggedDogi />} />
      <Route path="/courses/strategic-trading/how-to-trade-the-long-legged-doji-and-the-high-wave" element={<TradeTheLongLeggedDogi />} />
      <Route path="/courses/strategic-trading/the-gravestone-doji-and-the-dragonfly-doji" element={<GraveStoneDojiAndDragonflyDogi />} />
      <Route path="/courses/strategic-trading/how-to-trade-the-gravestone-doji-and-the-dragonfly-doji" element={<TradeGraveStoneDojiAndDragonflyDogi />} />
      <Route path="/courses/strategic-trading/shooting-star-and-inverted-hammer" element={<ShootingStarAndInvertedHammer />} />
      <Route path="/courses/strategic-trading/how-to-trade-shooting-star-and-inverted-hammer" element={<TradeShootingStarAndInvertedHammer />} />
      <Route path="/courses/strategic-trading/dark-cloud-cover" element={<DarkCloudCover />} />
      <Route path="/courses/strategic-trading/how-to-trade-dark-cloud-cover" element={<TradeDarkCloudCover />} />
      <Route path="/courses/strategic-trading/three-white-soldiers-and-three-black-crows" element={<WhiteSoldierAndBlackCrows />} />
      <Route path="/courses/strategic-trading/how-to-trade-three-white-soldiers-and-three-black-crows" element={<TradeWhiteSoldierAndBlackCrows />} />
      <Route path="/courses/strategic-trading/morning-star-and-evening-star" element={<MorningStarAndEveningStar />} />
      <Route path="/courses/strategic-trading/how-to-trade-morning-star-and-evening-star" element={<TradeMorningStarAndEveningStar />} />
      <Route path="/courses/strategic-trading/what-are-harmonic-price-patterns" element={<HarmonicPrice />} />
      <Route path="/courses/strategic-trading/the-abcd-pattern" element={<ABCD />} />
      <Route path="/courses/strategic-trading/the-gartley-pattern" element={<GartleyPattern />} />
      <Route path="/courses/strategic-trading/the-bat-pattern" element={<BatPattern />} />
      <Route path="/courses/strategic-trading/the-crab-pattern" element={<CrabPattern />} />
      <Route path="/courses/strategic-trading/the-butterfly-pattern" element={<ButterflyPattern />} />
      <Route path="/courses/strategic-trading/the-shark-pattern" element={<SharkPattern />} />
      <Route path="/courses/strategic-trading/the-cypher-pattern" element={<CypherPattern />} />
      <Route path="/courses/strategic-trading/the-three-drives-pattern" element={<ThreeDrivesPattern />} />
      <Route path="/courses/strategic-trading/the-wolfe-waves-pattern" element={<WolfWavePattern />} />
      <Route path="/courses/strategic-trading/what-is-a-trading-strategy" element={<TradingStrategy />} />
      <Route path="/courses/strategic-trading/the-pop-'n'-stop-and-drop-'n'-stop" element={<PopNDropN />} />
      <Route path="/courses/strategic-trading/how-to-trade-the-pop-'n'-stop-and-drop-'n'-stop" element={<TradePopNDropN />} />
      <Route path="/courses/strategic-trading/the-bladerunner" element={<BladeRunner />} />
      <Route path="/courses/strategic-trading/how-to-trade-the-bladerunner" element={<TradeBladeRunner />} />
      <Route path="/courses/strategic-trading/bolly-band-bounce" element={<BollyBandBounce />} />
      <Route path="/courses/strategic-trading/how-to-trade-bolly-band-bounce" element={<TradeBollyBandBounce />} />
      <Route path="/courses/strategic-trading/daily-fibonacci-pivot" element={<FibonacciPivot />} />
      <Route path="/courses/strategic-trading/how-to-trade-the-daily-fibonacci-pivot" element={<TradeFibonacciPivot />} />
      <Route path="/courses/strategic-trading/london-hammer" element={<LondanHammer />} />
      <Route path="/courses/strategic-trading/how-to-trade-market-opens" element={<TradeMarketOpens />} />
      <Route path="/courses/strategic-trading/the-forex-fractal" element={<ForexFractal />} />
      <Route path="/courses/strategic-trading/how-to-trade-the-forex-fractal" element={<TradeForexFractal />} />
      <Route path="/courses/strategic-trading/what-is-fibonacci-trading" element={<FibonacciTrading />} />
      <Route path="/courses/strategic-trading/how-reliable-are-fibonacci-retracements" element={<FibonacciRetracement />} />
      <Route path="/courses/strategic-trading/how-to-trade-fibonacci-retracements" element={<TradeFibonacciRetracement />} />
      <Route path="/courses/strategic-trading/how-to-trade-fibonacci-extensions" element={<TradeFibonacciExtensions />} />
      <Route path="/courses/strategic-trading/common-mistakes-with-fibonacci-tools" element={<FibonacciTools />} />
      <Route path="/courses/strategic-trading/fibonacci-trading-strategies" element={<FibonacciTradingStrategy />} />
      <Route path="/courses/strategic-trading/introduction-to-elliott-wave-theory" element={<ElliotWave />} />
      <Route path="/courses/strategic-trading/impulse-waves" element={<ImpulseWave />} />
      <Route path="/courses/strategic-trading/corrective-waves" element={<CorrectiveWave />} />
      <Route path="/courses/strategic-trading/fractal-nature-of-elliott-waves" element={<FractalNatureOfElliotWave />} />
      <Route path="/courses/strategic-trading/how-to-trade-elliott-waves" element={<TradeElliotWave />} />
      <Route path="/courses/strategic-trading/rules-and-tips-for-using-elliott-waves" element={<RulesOfUsingElliotWave />} />
      <Route path="/courses/strategic-trading/three-high-probability-trading-setups" element={<HighProbabilitySetup />} />


{/*-----------------------------Quiz section--------------------------------*/}

      <Route path="/quiz" element={<Forex />} />

      



      {/* Add more routes for other pages */}
    </Routes>
  </Router>

  <Footer/>
  </div>
  )
}

export default App
