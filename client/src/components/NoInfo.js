import React from 'react';


function NoInfo(props){
    return (
        <div>
            <h4>Xin lỗi ! Bạn không nằm trong danh sách được biết số đt của mình. Vui lòng gõ có dấu đúng tên và thành phố.</h4>
            <p>Đúng : "Huyền Trang" hoặc "HuyềnTrang"</p>
            <p>Sai : Huyen Trang</p>
        </div>
    )
}

export default NoInfo;