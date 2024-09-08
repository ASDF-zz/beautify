function calculateGrout() {  
    const tileLength = parseFloat(document.getElementById('tileLength').value) / 100; // 转换为米  
    const tileWidth = parseFloat(document.getElementById('tileWidth').value) / 100; // 转换为米  
    const area = parseFloat(document.getElementById('area').value);  
    const gapWidth = parseFloat(document.getElementById('gapWidth').value) ;  

    // 假设每立方米缝隙需要的美缝剂量（毫升），这个值需要根据实际情况来设定  
    const groutPerCubicMeter = 100000; // 假设值，每立方米需要100,000毫升美缝剂

    // 计算瓷砖面积  
    const tileArea = tileLength * tileWidth;  
    
    // 计算需要的瓷砖块数（包括缝隙，但减去一个完整的瓷砖面积）  
    const numTiles = Math.ceil(area / tileArea) - 1;  

    // 计算每块瓷砖长宽  
    const len = tileLength + tileWidth;  
    
    // 计算总缝隙长度  
    const totalLen = numTiles * len;  

    // 使用假设的每立方米美缝剂量来计算所需的美缝剂总量（毫升）  
    const usage = totalLen * gapWidth * 5; 


    // 显示结果  
    const resDiv = document.getElementById('results');  
    resDiv.innerHTML = `  
        <p>美缝总长度: ${totalLen.toFixed(2)} 米</p>  
        <p>美缝剂用量估算: ${usage.toFixed(2)} 毫升</p>  
    `;  
}