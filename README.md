# Lab Advance 04 React-Native
## เครื่องมือที่จำเป็น
-	Chocolatey (for Windows), Brew (for OSX)
-	Node.js
-	Yarn
-	Git
-	expo CLI
-	Visual Studio Code
-	Android Studio

 
## หลังจากที่ได้ติดตั้ง Chocolatey ในเครื่องแล้ว สามารถติดตั้ง Node.js, Yarn และ Git ได้ผ่าน Chocolatey ผ่าน Command Prompt (ที่รันด้วยสิทธิ์ Administrator) ดังนี้
>> choco install nodejs
>> choco install yarn
>> choco install git


## การจัด Layout บน React Native จะใช้ Flex Box ในการจัดการ แม้ว่า เทคนิคการจัด Flex Box จะรองรับความซับซ้อนสูง (React Native ไม่สนับสนุนทุก features ของ Flex Box)  อย่างไรก็ตามคุณสมบัติที่ถูกใช้บ่อยในการจัด Layout มี 3 คุณสมบัติ คือ 
•	flex – เป็นตัวเลข น้ำหนักในการแบ่งพื้นที่ เช่นถ้าคอมโพเนนต์ A มี flex เท่ากับ 1, คอมโพเนนต์ B มี flex เท่ากับ 2 หมายความว่า B จะใช้พื้นที่มากกว่า A สองเท่า และถ้ามีคอมโพเนนต์ A เพียง คอมโพเนนต์เดียว จะใช้เต็มพื้นที่
•	flexDirection – แกนหลักของ Layout ว่าคอมโพเนนต์ลูกควรจะจัดเรียงแนวนอน (row) และแนวตั้ง (column) โดยค่า default คือ column
•	justifyContent – การกระจายตัวของคอมโพเนนต์ลูกว่าควรจะเป็นแบบแบบใด ในแนวแกนเดียวกับ flexDirection
•	alignItems - – การกระจายตัวของคอมโพเนนต์ลูกว่าควรจะเป็นแบบแบบใด ในคนละแกนกับ flexDirection



## ในการติดตั้ง create-react-app CLI สามารถทำผ่านการใช้คำสั่ง yarn ผ่าน Command Prompt (ที่รันด้วยสิทธิ์ Administrator)

>> yarn global add expo-cli


## ซึ่งโดยส่วนมาก Application ที่สมบูรณ์มักมีหน้าจอ UI (สกรีน) มากกว่า 1 หน้าจอ ในการสลับหน้าจอไปมา สามารถทำได้ผ่านการใช้ Navigation Library ซึ่งไลบรารีที่ถือเป็น Official จาก React คือ react-navigation

>> expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
>> yarn add @react-navigation/stack @react-navigation/native



## การติดตั้ง react-native-router-flux ที่เอาไว้เชื่อมหน้า Loading
- ติดตั้ง Library ผ่าน Command Prompt ด้วยคำสั่ง 

>> expo install react-native-router-flux
>> yarn add react-native-router-flux



## การใช้งาน React-Native ที่มาจากการโหลด master หรือ clone จาก git 
- ให้ทำการใช้คำสั่ง yarn อีกครั้งใน cmd จึงจะใช้คำสั่ง yarn start ได้
 
>> yarn 

