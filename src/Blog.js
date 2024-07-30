import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Header, Footer } from "./components";
import { Authorization } from "./pages";
import { Registration } from "./components/registration/registration";

const AppColum = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1000px;
  min-height: 100%;
  margin: 0 auto;
  background-color: #fff;
`;

const Content = styled.div`
  padding: 120px 0;
`;

// const H2 = styled.h2`
//   text-align: center;
// `;

const Blog = () => {
  return (
    <AppColum>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<div>Главная</div>} />
          <Route path="/login" element={<Authorization />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/users" element={<div>Пользователи</div>} />
          <Route path="/post" element={<div>Новая статья</div>} />
          <Route path="/postId" element={<div>Статья</div>} />
          <Route path="*" element={<div>Ошибка</div>} />
        </Routes>
      </Content>
      <Footer />
    </AppColum>
  );
};

export default Blog;
