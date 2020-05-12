import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.style.scss';

const MenuItem = ({title,imageURL,urlPath,history,location,match}) => {
    // console.log('menu',history,location,match,urlPath)
    return(
    <div  className='menu-item' onClick={() => history.push(`${match.url}${urlPath}`)}>
    <div className='bg-image' style={{
        background:`url(${imageURL}),url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAD1BMVEUtLS0xMTEwMDAuLi4vLy/eqZCcAAAELElEQVR4nO2d4XLiMAyEReH9n/nmekPwgC5eJZa1Dsu/atrsx1dbTW0zMft9PW7b627b6+dVtV71Vfx5Fe+96qNX9cGKcD8uGAhvLnje1aNX9cGm4k4Kj4wgAlc7uBpXOK5c5bhyLzjUVaSLz8fl6ldDXY3H7cTwuqrAPYLE4KoEFw53Y3jvGVJwP2NW6O1FuDvh3RiufjUBV65wXIOQuFyV4Zpc4bimOYjjmlzhuOYiyZWL64bz9qta3LVcFf8pcsIZ5mATxjIHm/z88O4I4upXHti08MV7e0MgVxDuDlIvZqirYytVBbhcq3pdK6W4SeGR3l69AgrjHmsAK6wWj8fN3wkkuEMfhXso/Dv71StIrgBcuQrgylUAdx1XLthc3GVc1Y+r3zS5AnFNrnBcW8OVCzYd1+QKx22y5aqHK1cBXLkK4MpVAJfSFetGgFwFcAldkc7BJ5hcydXlXdH2K7la2hX5HHR3d+TqP2Ap4cucXAjiouGPXnXqbnwRLhieP66GukrCxcIJxlWkX2XhlofvVanmoL3v7tCOKwZXfz+OEpnqBK4KcU3jCsc1ucJxmy/nnuBz33/ZIToMtyqcYoc5ipsT7lrhdYXipoRfc1xtpap70SXuGd5qK6y+ZPX2AO6kcPIV0ACuXBW5IuhXmbhyVeTKvOp15qD/YSC58sHkKoCbHM7br47gDgu/eG9vapHw5oIrzMGRuDsxtP2qFFe9HQMzucJxDQi/6smFMK5pBRTHtaF/bpNcRXp7Jm7zTVUnF8pXi2HcQLgbc4kVUBR3YPi1+1X703IF4MpVAFeuAriDwt0YXlcncDWu5EquVnflxvC6OoMrVwFcuQrgylUAV64CuHIVwI2GX29lHcc1uYJxsUfJaA7+q5pc4bgmVziu/ygZ9SsX142RKx8XD//2OdheUq76uMPC1zu5EMcFw7N2TZNcJeEWhOePqyzcMeGhfxrqXZ3B7U31oQ0gy9UkXPWrGleRzkTgKoyrcRXAlasArhfuXrDsVFrSRzeO4DrhXDvMBP3q/nZRWlcuWBUuuSumcfVxDHfCikLSvegEXBsSntXbrVedi2taAcVxgUfJyNWzarwroAT96g23SZGrHi6tK/OqxS1DrgK4chXAXchVfcugdEXY2xuCKldNGP0cfIKNDO+OIK5+FcYdGX7V3i5Xg1xx7TDTHLRIillrBRTFPRseaZYEK6DncPeRVlgtnoj7Gf59K6AwLhijfrURyBWGK1c4rskVjmt0rlwrFK6QR8loXD2r/UfJyNVWbb6Uqx4YlyvXCo2rV0Gu+rhyFcCVqwCuXAVw5QrH/SkPlyu5Ghy+2By8lYcv5mrCAvZ1XL2Y1K/6uHIVwK0IX3MOblhyBeGeCV/85MIxXD8mKTxr13QCrt0m/6KGupqMa1N+Ue77H9qZpuD+AQ3+hGN1e4mLAAAAAElFTkSuQmCC)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}>
        <div className='content'>
            <span className='title'>{title}</span>
            <span className='subtitle'>Shop Now</span>
        </div>
    </div>
    </div>
    )
}

export default withRouter(MenuItem);