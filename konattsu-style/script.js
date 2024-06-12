const konattsu_background = () => {
  const canvas = document.createElement("canvas");
  canvas.className = "ocean";
  canvas.width = window.innerWidth * devicePixelRatio;
  canvas.height = window.innerHeight * devicePixelRatio;
  document.body.append(canvas);
  const graphics = canvas.getContext("2d");
  let sin_wave_count = 0;
  const konattsu_snake_svg = new Image();
  konattsu_snake_svg.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjI1MCAzNTAgODcwIDgwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5leWUsIC5ib2R5IHsKICAgICAgICBzdHJva2Utd2lkdGg6IDBweDsKICAgICAgfQogICAgICAuZXllIHsKICAgICAgICBmaWxsOiAjZmNmNGUyOwogICAgICB9CiAgICAgIC5ib2R5IHsKICAgICAgICBmaWxsOiAjNjY2Y2IxOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8ZyBpZD0ibmF6b19zZWlidXR1IiBkYXRhLW5hbWU9IuisjueUn+eJqSI+CiAgICA8cGF0aAogICAgICBjbGFzcz0iYm9keSIKICAgICAgZD0iTTQ1OS44Nyw1MDIuOTNsLTcxLjIyLDgxLjIxYy0yMy4zNy0yMC41LTM2Ljc5LTUwLjEyLTM2Ljc5LTgxLjIxLDAtNTkuMjUsNDguNzYtMTA4LjAxLDEwOC4wMS0xMDguMDFzMTA4LjAxLDQ4Ljc2LDEwOC4wMSwxMDguMDFoLTEwOC4wMVoiIC8+CiAgICA8cGF0aAogICAgICBjbGFzcz0iYm9keSIKICAgICAgZD0iTTM4MS4yLDU5OC42N2w3MS4yOS04MS4xNGMyMy4zNSwyMC41MiwzNi43NSw1MC4xNSwzNi43Miw4MS4yNC0uMDUsNTkuMjUtNDguODUsMTA3Ljk3LTEwOC4xMSwxMDcuOTItNTkuMjUtLjA1LTEwNy45Ny00OC44NS0xMDcuOTItMTA4LjExbDEwOC4wMS4wOVoiIC8+CiAgICA8Y2lyY2xlIGNsYXNzPSJleWUiIGN4PSI1MTAuODgiIGN5PSI0NjYuNzQiIHI9IjEzLjY5IiAvPgogIDwvZz4KPC9zdmc+Cg==";
  const konattsu_snake = document.createElement("canvas");
  konattsu_snake.width = window.innerWidth * devicePixelRatio;
  konattsu_snake.height = window.innerHeight * devicePixelRatio;
  konattsu_snake.className = "nazoseibutu";
  document.body.append(konattsu_snake);
  const nazoseibutu = konattsu_snake.getContext("2d");
  const konattsu_tree_svg = new Image();
  konattsu_tree_svg.src = "data:image/svg+xml;base64,PHN2ZwogICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIgogICAgICB2aWV3Qm94PSIyODAgMTYwIDU2MCA1ODAiCiAgICAgIHZlcnNpb249IjEuMSIKICAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICAgIDxkZWZzPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgIC5sZWFmIHsKICAgICAgICAgICAgZmlsbDogIzgxOTUyYzsKICAgICAgICAgIH0KICAgICAgICAgIC50cmVlIHsKICAgICAgICAgICAgZmlsbDogI2MxNGIxZDsKICAgICAgICAgIH0KICAgICAgICAgIC5sZWFmLCAudHJlZSB7CiAgICAgICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICAgICAgfQogICAgICAgIDwvc3R5bGU+CiAgICAgIDwvZGVmcz4KICAgICAgPHBhdGgKICAgICAgICBjbGFzcz0ibGVhZiIKICAgICAgICBkPSJNNjMwLjI5LDI5MC40OWMzLjcxLTcuODItNTEuMDgtNTUuNTQtMTIyLjg3LTcwLjkyLTExNS4wNi0yNC42Ni0yMjIuODksNDQuNjctMjIwLjE3LDUzLjYsMi4yOCw3LjQ5LDgxLjEzLTMxLjQ2LDE5OS4zNy0xNy40NCw4NS45OCwxMC4xOSwxNDAuMTYsNDIuMTUsMTQzLjY3LDM0Ljc2WiIgLz4KICAgICAgPHBhdGgKICAgICAgICBjbGFzcz0ibGVhZiIKICAgICAgICBkPSJNNjI3LjQ3LDI5MC4wNGMtMy44My03Ljg5LDE1LjQyLTMwLjU1LDM5Ljc3LTM5LjY4LDYxLjU3LTIzLjA4LDE0MC45OSw0NS44NywxMzcuNDQsNTMuMzMtMi4xMyw0LjQ4LTMyLjQ2LTE2LjgyLTg5LjA2LTE4LjY5LTUxLjYxLTEuNzEtODMuNzYsMTQuMS04OC4xNSw1LjA1WiIgLz4KICAgICAgPHBhdGgKICAgICAgICBjbGFzcz0ibGVhZiIKICAgICAgICBkPSJNNjI5Ljk1LDI5MS4yM2MyLjg0LTQuNTYtMjIuNjItNTAuNjctNjAuMjEtODMuMDUtNjguNTgtNTkuMDgtMTQ4LjUtNDcuNDctMTQ5LjIxLTQwLjUtLjU5LDUuODMsNTQuNjcsNS43OSwxMjcuMTQsNTUuMzcsNTAuNDQsMzQuNTEsNzkuNDcsNzIuNjksODIuMjcsNjguMTlaIiAvPgogICAgICA8cGF0aAogICAgICAgIGNsYXNzPSJsZWFmIgogICAgICAgIGQ9Ik02MzAuMTUsMjg4Ljk1Yy44NS01Ljk4LTI2Ljk0LTE4LjQ0LTU0Ljk3LTIwLjg5LTc4Ljg1LTYuODktMTQ2LjY5LDY2LjU5LTE0Mi45Myw3Mi41NywyLjY4LDQuMjYsMzkuODctMjguODgsMTEyLjctNDEuNzgsNDguMzEtOC41Niw4NC4yNy0zLjI0LDg1LjIxLTkuOVoiIC8+CiAgICAgIDxwYXRoCiAgICAgICAgY2xhc3M9ImxlYWYiCiAgICAgICAgZD0iTTYyOC44MiwyOTAuN2MuNDctNC4wNCwzNC43Ny04LjM4LDY4LjI0LDIuMjYsNDYuOSwxNC45MSw3Ni4zNCw1NC4xOCw3My4zNCw1OC4wNC0yLjcyLDMuNTEtMzEuMS0yMy42NC04OS44My00NC4wMy0zMS41MS0xMC45My01Mi4xMi0xMy4xLTUxLjc1LTE2LjI4WiIgLz4KICAgICAgPHBhdGgKICAgICAgICBjbGFzcz0idHJlZSIKICAgICAgICBkPSJNNzIwLjg4LDc1Ni4zM2M3LjAxLTQ3Ljg5LDEyLjM2LTExNi42NiwxLjY1LTE5OC4xNC0yMC40My0xNTUuNS04OC4wNi0yNzEuNTktOTUuNjYtMjY5LjctNy41MSwxLjg4LDU0LjY5LDExNi40NCw0Mi44OCwyNzMuODItNi4xMiw4MS41Ni0zMC4xMywxNDguMTYtNTEuMTMsMTk0LjAyIiAvPgo8L3N2Zz4K";
  konattsu_tree_svg.style = `
    position:fixed;
    width:100vw;
    height:100vh;
    left:0%;
    bottom:0;
    z-index:-1001;
  `;  // スタイルを定義する
  document.body.append(konattsu_tree_svg);
  let wave_height = canvas.height * .8;
  const menu_open_tick = 100;
  let wave_way = wave_height / menu_open_tick;
  document.querySelector("#konattsu-menu-button").addEventListener("click", () => {
    if (wave_way > 0) {
      wave_way = -1;
    } else {
      wave_way = 1;
    }
  });

  window.onresize = () => {
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
    konattsu_snake.width = window.innerWidth * devicePixelRatio;
    konattsu_snake.height = window.innerHeight * devicePixelRatio;
  };
  const draw_sin_wave = () => {
    //一旦全てを消し去る
    if (wave_way > 0) {
      wave_way += 2;
    } else {
      wave_way -= 2;
    }
    wave_way *= 0.9;
    wave_height += wave_way;
    wave_height = Math.min(canvas.height * .8, wave_height);
    wave_height = Math.max(canvas.height * .07, wave_height);
    document.querySelector("#konattsu-menu").style.top = (wave_height / devicePixelRatio * 1.25).toString() + "px";
    graphics.clearRect(0, 0, canvas.width, canvas.height);
    //波を進める
    sin_wave_count += 0.9 / 1000;//ここの数値が大きければ大きい程早く波が進みます。
    sin_wave_count %= 180;//ここは変更するべきではありません。180の倍数以外にするとカクツキマス。
    //波の描画
    graphics.beginPath();
    graphics.moveTo(0, canvas.height * .8);
    // 先にへびの位置に関する変数を定義。次のforループで中央まで到達した際に自動的に代入する。
    let center_height;
    const wave_level = 1;//波の精度を決めます。少ない程軽い。だがあんまり意味がない。だから基本的には1で。
    const konattsu_snake_size = Math.min(canvas.width, canvas.height);  // 謎生物の大きさを設定。
    for (let i = 0; i < canvas.width; i += wave_level) {
      const wave_width = .0002;
      const sin_dir = sin_wave_count + wave_width * i;
      const center = canvas.width * .5;
      graphics.lineTo(i, wave_height + wave_height / 20 * Math.sin(sin_dir * 180 / Math.PI));
      if (i >= center && i - wave_level <= center) {
        center_height = wave_height + wave_height / 20 * Math.sin(sin_dir * 180 / Math.PI);
      }
    }
    graphics.lineTo(canvas.width, canvas.height * .8);
    graphics.lineTo(canvas.width, canvas.height);
    graphics.lineTo(0, canvas.height);
    graphics.closePath();
    graphics.fillStyle = "#2a82c2";
    graphics.fill();
    //konattsuを右に
    nazoseibutu.clearRect(0, 0, konattsu_snake.width, konattsu_snake.height);
    nazoseibutu.drawImage(
      konattsu_snake_svg,
      (konattsu_snake.width - konattsu_snake_size / 2) / 2,
      center_height - konattsu_snake_size * .35,
      konattsu_snake_size,
      konattsu_snake_size / konattsu_snake_svg.width * konattsu_snake_svg.height
    );
    requestAnimationFrame(draw_sin_wave);
  };
  draw_sin_wave();
};
const generate_obj = () => {
  const header = document.createElement("header");
  header.innerHTML = `
    <button id="konattsu-menu-button">menu</button>
    <a href="/">
    <img class="konattsu" id="konattsu-header-icon" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDExMjcuOTQgMTAxNy4wMSI+PGRlZnM+PHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICM4MTk1MmM7CiAgICAgIH0KCiAgICAgIC5jbHMtMSwgLmNscy0yLCAuY2xzLTMsIC5jbHMtNCwgLmNscy01LCAuY2xzLTYgewogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICNmY2Y0ZTI7CiAgICAgIH0KCiAgICAgIC5jbHMtMyB7CiAgICAgICAgZmlsbDogIzAwMmEzNTsKICAgICAgfQoKICAgICAgLmNscy00IHsKICAgICAgICBmaWxsOiAjYzE0YjFkOwogICAgICB9CgogICAgICAuY2xzLTUgewogICAgICAgIGZpbGw6ICMyNzgzYzQ7CiAgICAgIH0KCiAgICAgIC5jbHMtNiB7CiAgICAgICAgZmlsbDogIzY2NmNiMTsKICAgICAgfQogICAgPC9zdHlsZT48L2RlZnM+PGcgaWQ9ImJhY2tncm91bmQiPjxyZWN0IGNsYXNzPSJjbHMtMyIgd2lkdGg9IjEwMTcuMDEiIGhlaWdodD0iMTAxNy4wMSIvPjwvZz48ZyBpZD0iX+ODrOOCpOODpOODvF8xIiBkYXRhLW5hbWU9IuODrOOCpOODpOODvCAxIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02MzAuMjksMjkwLjQ5YzMuNzEtNy44Mi01MS4wOC01NS41NC0xMjIuODctNzAuOTItMTE1LjA2LTI0LjY2LTIyMi44OSw0NC42Ny0yMjAuMTcsNTMuNiwyLjI4LDcuNDksODEuMTMtMzEuNDYsMTk5LjM3LTE3LjQ0LDg1Ljk4LDEwLjE5LDE0MC4xNiw0Mi4xNSwxNDMuNjcsMzQuNzZaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNjI3LjQ3LDI5MC4wNGMtMy44My03Ljg5LDE1LjQyLTMwLjU1LDM5Ljc3LTM5LjY4LDYxLjU3LTIzLjA4LDE0MC45OSw0NS44NywxMzcuNDQsNTMuMzMtMi4xMyw0LjQ4LTMyLjQ2LTE2LjgyLTg5LjA2LTE4LjY5LTUxLjYxLTEuNzEtODMuNzYsMTQuMS04OC4xNSw1LjA1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTYyOS45NSwyOTEuMjNjMi44NC00LjU2LTIyLjYyLTUwLjY3LTYwLjIxLTgzLjA1LTY4LjU4LTU5LjA4LTE0OC41LTQ3LjQ3LTE0OS4yMS00MC41LS41OSw1LjgzLDU0LjY3LDUuNzksMTI3LjE0LDU1LjM3LDUwLjQ0LDM0LjUxLDc5LjQ3LDcyLjY5LDgyLjI3LDY4LjE5WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTYzMC4xNSwyODguOTVjLjg1LTUuOTgtMjYuOTQtMTguNDQtNTQuOTctMjAuODktNzguODUtNi44OS0xNDYuNjksNjYuNTktMTQyLjkzLDcyLjU3LDIuNjgsNC4yNiwzOS44Ny0yOC44OCwxMTIuNy00MS43OCw0OC4zMS04LjU2LDg0LjI3LTMuMjQsODUuMjEtOS45WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTYyOC44MiwyOTAuN2MuNDctNC4wNCwzNC43Ny04LjM4LDY4LjI0LDIuMjYsNDYuOSwxNC45MSw3Ni4zNCw1NC4xOCw3My4zNCw1OC4wNC0yLjcyLDMuNTEtMzEuMS0yMy42NC04OS44My00NC4wMy0zMS41MS0xMC45My01Mi4xMi0xMy4xLTUxLjc1LTE2LjI4WiIvPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTcyMC44OCw3NTYuMzNjNy4wMS00Ny44OSwxMi4zNi0xMTYuNjYsMS42NS0xOTguMTQtMjAuNDMtMTU1LjUtODguMDYtMjcxLjU5LTk1LjY2LTI2OS43LTcuNTEsMS44OCw1NC42OSwxMTYuNDQsNDIuODgsMjczLjgyLTYuMTIsODEuNTYtMzAuMTMsMTQ4LjE2LTUxLjEzLDE5NC4wMiIvPjxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTg2OS40Myw3ODUuMjZjLTM4LTI5LjY3LTk1LjgtNjQuNDEtMTY2LjU3LTY0LjMyLTc0Ljg2LjEtOTIuMjcsMzkuMDgtMTY4LjIyLDQyLjg4LTEwMC4zLDUuMDItMTMwLjA3LTU5Ljk0LTIyNC4zLTY5LjI3LTUyLjExLTUuMTYtMTI4Ljg3LDYuMjEtMjI5LjI1LDg3LjQxIi8+PHBhdGggY2xhc3M9ImNscy02IiBkPSJNNDU5Ljg3LDUwMi45M2wtNzEuMjIsODEuMjFjLTIzLjM3LTIwLjUtMzYuNzktNTAuMTItMzYuNzktODEuMjEsMC01OS4yNSw0OC43Ni0xMDguMDEsMTA4LjAxLTEwOC4wMXMxMDguMDEsNDguNzYsMTA4LjAxLDEwOC4wMWgtMTA4LjAxWiIvPjxwYXRoIGNsYXNzPSJjbHMtNiIgZD0iTTM4MS4yLDU5OC42N2w3MS4yOS04MS4xNGMyMy4zNSwyMC41MiwzNi43NSw1MC4xNSwzNi43Miw4MS4yNC0uMDUsNTkuMjUtNDguODUsMTA3Ljk3LTEwOC4xMSwxMDcuOTItNTkuMjUtLjA1LTEwNy45Ny00OC44NS0xMDcuOTItMTA4LjExbDEwOC4wMS4wOVoiLz48Y2lyY2xlIGNsYXNzPSJjbHMtMiIgY3g9IjUxMC44OCIgY3k9IjQ2Ni43NCIgcj0iMTMuNjkiLz48cmVjdCBjbGFzcz0iY2xzLTUiIHg9IjEwMS4zNCIgeT0iNzgwLjA4IiB3aWR0aD0iNzQ5LjAzIiBoZWlnaHQ9IjE3Mi40NSIvPjwvZz48L3N2Zz4=">
    </a>
  `;
  document.body.append(header);
  const menu = document.createElement("div");
  menu.innerHTML = `
  <a href="https://github.com/konattsu">GitHub</a>
  `;
  menu.id = "konattsu-menu";
  document.body.append(menu);
};
const main = () => {
  generate_obj();
  konattsu_background();
};
main();