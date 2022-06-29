import styled from "styled-components";

export const TaskAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  padding: 1rem 0.5rem;
  border-radius: 1rem;
  background-color: grey;
  min-height: 30rem;
  width: 40rem;

  .header {
    .area-title {
      font-size: 1.6rem;
      color: white;
    }
  }

  .items {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }
`;
