# appointment-react

將此 [prototype](https://aoigj100a.github.io/appointment-page-20210713/)，移近 react 中並且重現功能。

## 輸入面板功能
- 設想使用情境，添加確認過後需要跳轉所停留的位置。
- 退回：讓退回鍵不會將初始 board 狀態破壞。
- 清空：清空將還原被儲存的暫存值並且回傳。
- 改變輸入樣式：使用者輸入中字會變粗黑。:black_heart:

## 拆解 UI 與各元件功能
- **Home**(單純用來 render home page)
  - **TypeController** (操作的父元件)
    - **Board**（按照 isTyped typedValue 的變化，更新元件）
    - **Typer**（使用 handleClick 來添加 typedValue 內容）
    - **ConfirmBtn**（只要能知道父元件裡面 isConfirm，就能夠判斷要跳轉或彈出視窗）

## 狀態
- Board：是否被輸入？ -> 樣式改變 ｜ 輸入內容增加 -> 內容改變
- Typer：是哪一個按鈕被點選？ -> 用按鈕持有的 data 來判斷執行動作

## 建置環境
1. react-router-dom 5.2.0
2. bootstrap 5.0.2
3. node-sass 6.0.1
4. sweetalert2 11.0.19
5. gh-pages 3.2.3
6. axios 0.21.1

## 安裝與執行步驟 (Installation and Execution)
1. 將專案複製到本機 (兩種方法)
> (1) 打開終端機輸入 
`git clone https://github.com/aoigj100a/appointment-react`</br>
> (2) 點選 download ZIP 下載

2. 進入專案資料夾安裝工具包
> 打開終端機輸入
`npm install`

3. 啟動專案
> 安裝完畢之後在終端機輸入
`npm start`

### 問題與解決
- [不小心在電腦的根目錄底下執行了`npm i`:joy_cat:而觸發bug](https://stackoverflow.com/questions/56528222/npm-start-returns-error-there-might-be-a-problem-with-the-project-dependency-t):ok::heavy_check_mark:
- [對 NavLinks 添加 activeClassName 但無作用 -> 實際上只要使用 Link 因為 NavLink 需要跟path 匹配的時候才會顯示 active:joy_cat:](https://github.com/ReactTraining/react-router/issues/6201):ok::heavy_check_mark:
- [Home的 Link to "/" 產生 "hash history cannot push the same path" 錯誤](https://stackoverflow.com/questions/49157214/warning-hash-history-cannot-push-the-same-path-a-new-entry-will-not-be-added-t):ok::heavy_check_mark:

### 參考資料
- [使用 react 取得 dataSet](https://www.codegrepper.com/code-examples/javascript/react+get+data+attribute+from+element)
- [阻擋預設事件發生](https://zh-hant.reactjs.org/docs/handling-events.html)
- [CSS BEM](https://chupainotebook.blogspot.com/2019/05/bemcss.html#2-2-Sass-%E8%88%87-BEM)
- [添加圖片、字型、檔案](https://create-react-app.dev/docs/adding-images-fonts-and-files)
- [Public Folder 建議使用方式](https://create-react-app.dev/docs/using-the-public-folder)
- [環境變數的應用](https://create-react-app.dev/docs/adding-custom-environment-variables)
- [用 AJAX 拉取資料](https://create-react-app.dev/docs/fetching-data-with-ajax-requests)
- [如何管理 API](https://medium.com/i-am-mike/%E4%BD%BF%E7%94%A8axios%E6%99%82%E4%BD%A0%E7%9A%84api%E9%83%BD%E6%80%8E%E9%BA%BC%E7%AE%A1%E7%90%86-557d88365619)

## 專案開發人員

>[AOI](https://github.com/aoigj100a)
