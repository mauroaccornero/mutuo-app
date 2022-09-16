import { Provider } from 'react-redux';
/* core */
import store from '../store/store';
import { AppStore } from '../context/AppContext';
/* components */
import { Table } from '../components/Table';
import { MortgageForm } from '../components/MortgageForm';
import { RepaymentForm } from '../components/RepaymentForm';
import { Logo } from '../components/Logo';
import { RepaymentsBox } from '../components/RepaymentsBox';
import { HeaderInfo } from '../components/HeaderInfo';
/* css */
import '../assets/css/app.scss';

const App = () => {
    return (
        <Provider store={store}>
            <AppStore>
                <div id='app-container' data-testid={'mortgage-app'}>
                    <div className='row'>
                        <div className='column'>
                            <Logo />
                        </div>
                        <div className='column'>
                            <HeaderInfo />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='column'>
                            <MortgageForm />
                            <RepaymentForm />
                            <RepaymentsBox />
                        </div>
                        <div className='column'>
                            <Table />
                        </div>
                    </div>
                </div>
            </AppStore>
        </Provider>
    );
};

export default App;
