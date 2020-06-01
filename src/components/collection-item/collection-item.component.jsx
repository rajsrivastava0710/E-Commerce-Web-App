import React from 'react';
import {connect} from 'react-redux';
import './collection-item.style.scss';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';


const CollectionItem = ({item, addItem}) => {
    const { name, price, imageUrl } = item;
    return (
    <div className='collection-item'>
        <div className='image' style={{
            background:`url(${imageUrl}),url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAD1BMVEUtLS0xMTEwMDAuLi4vLy/eqZCcAAAELElEQVR4nO2d4XLiMAyEReH9n/nmekPwgC5eJZa1Dsu/atrsx1dbTW0zMft9PW7b627b6+dVtV71Vfx5Fe+96qNX9cGKcD8uGAhvLnje1aNX9cGm4k4Kj4wgAlc7uBpXOK5c5bhyLzjUVaSLz8fl6ldDXY3H7cTwuqrAPYLE4KoEFw53Y3jvGVJwP2NW6O1FuDvh3RiufjUBV65wXIOQuFyV4Zpc4bimOYjjmlzhuOYiyZWL64bz9qta3LVcFf8pcsIZ5mATxjIHm/z88O4I4upXHti08MV7e0MgVxDuDlIvZqirYytVBbhcq3pdK6W4SeGR3l69AgrjHmsAK6wWj8fN3wkkuEMfhXso/Dv71StIrgBcuQrgylUAdx1XLthc3GVc1Y+r3zS5AnFNrnBcW8OVCzYd1+QKx22y5aqHK1cBXLkK4MpVAJfSFetGgFwFcAldkc7BJ5hcydXlXdH2K7la2hX5HHR3d+TqP2Ap4cucXAjiouGPXnXqbnwRLhieP66GukrCxcIJxlWkX2XhlofvVanmoL3v7tCOKwZXfz+OEpnqBK4KcU3jCsc1ucJxmy/nnuBz33/ZIToMtyqcYoc5ipsT7lrhdYXipoRfc1xtpap70SXuGd5qK6y+ZPX2AO6kcPIV0ACuXBW5IuhXmbhyVeTKvOp15qD/YSC58sHkKoCbHM7br47gDgu/eG9vapHw5oIrzMGRuDsxtP2qFFe9HQMzucJxDQi/6smFMK5pBRTHtaF/bpNcRXp7Jm7zTVUnF8pXi2HcQLgbc4kVUBR3YPi1+1X703IF4MpVAFeuAriDwt0YXlcncDWu5EquVnflxvC6OoMrVwFcuQrgylUAV64CuHIVwI2GX29lHcc1uYJxsUfJaA7+q5pc4bgmVziu/ygZ9SsX142RKx8XD//2OdheUq76uMPC1zu5EMcFw7N2TZNcJeEWhOePqyzcMeGhfxrqXZ3B7U31oQ0gy9UkXPWrGleRzkTgKoyrcRXAlasArhfuXrDsVFrSRzeO4DrhXDvMBP3q/nZRWlcuWBUuuSumcfVxDHfCikLSvegEXBsSntXbrVedi2taAcVxgUfJyNWzarwroAT96g23SZGrHi6tK/OqxS1DrgK4chXAXchVfcugdEXY2xuCKldNGP0cfIKNDO+OIK5+FcYdGX7V3i5Xg1xx7TDTHLRIillrBRTFPRseaZYEK6DncPeRVlgtnoj7Gf59K6AwLhijfrURyBWGK1c4rskVjmt0rlwrFK6QR8loXD2r/UfJyNVWbb6Uqx4YlyvXCo2rV0Gu+rhyFcCVqwCuXAVw5QrH/SkPlyu5Ghy+2By8lYcv5mrCAvZ1XL2Y1K/6uHIVwK0IX3MOblhyBeGeCV/85MIxXD8mKTxr13QCrt0m/6KGupqMa1N+Ue77H9qZpuD+AQ3+hGN1e4mLAAAAAElFTkSuQmCC)`,
            backgroundPosition:'center',
            backgroundSize:'cover'
        }}/>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>&#8377;{price}</span>
        </div>
        <CustomButton inverted onClick={ () => ( addItem(item) )}>Add to Cart</CustomButton>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);