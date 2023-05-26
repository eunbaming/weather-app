# Weather 앱

<br/>

![Weather-app](https://user-images.githubusercontent.com/110072947/221766642-12b39515-c40b-43a0-b70c-392f2174df93.png)

+ Demo : https://weather-app-eight-mauve.vercel.app/

<br/>
<br/>

### 개발 목표

실존하는 데이터의 api를 가져와서 현재 위치, 그리고 원하는 도시의 실시간 날씨를 보여주며, React component의 이해를 기반한 웹페이지 구축 및 반응형으로 개발

<br/>
<br/>

### 사용 기술

<a href="#"><img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></a>

<br/>
<br/>

### Advanced Feature

+ 현재 위치 기반으로 실시간 날씨를 보여주는 ui 개발

```javascript
...
const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lng);
    });
  };
...
```

<br/>

+ 각각의 도시를 누를 때마다 데이터를 가지고 올 때 보여지는 로딩스피너 

![Weather-app](https://user-images.githubusercontent.com/110072947/221767795-347db06a-1b4b-4028-9062-f7ca056089dd.png)

<br/>

+ Media Query를 이용한 반응형 웹페이지 개발

[Web ver.]

<a href="#"><img src="https://user-images.githubusercontent.com/110072947/221769043-f42b00ed-e0b8-4dfc-b420-f8e2da167127.png" width="400"></a>
<a href="#"><img src="https://user-images.githubusercontent.com/110072947/221769020-daa7e2d1-9342-4920-a8ca-e45a1720476f.png" width="400"></a>

[Mobile ver.]

<a href="#"><img src="https://user-images.githubusercontent.com/110072947/221769457-256a3e2e-2d68-4b8f-b33c-cf57bb79b5ec.png" width="400"></a>
<a href="#"><img src="https://user-images.githubusercontent.com/110072947/221769472-a7923a50-cec5-43ef-9529-15618b890f98.png" width="400"></a>

<br/>

+ 에러 핸들링으로 에러가 발생했을 때 에러 메세지를 사용자가 볼 수 있도록 적용

![Weather-app](https://user-images.githubusercontent.com/110072947/230292635-45247f5a-a8ce-409c-bdee-a06a1c36ab97.png)

<br/>
<br/>

### 개선 사항

+ 날씨 데이터를 소수점 아래 두자리수까지만 보여주도록 개선 필요

+ 에러 핸들링 작동 개선 필요 -> 업데이트 완료 (맨 마지막)
