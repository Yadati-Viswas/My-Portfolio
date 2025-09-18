import styled from "styled-components"

export const EducationContainer = styled.section`
max-width: 980px;
margin: 0 auto;
padding: 40px 20px;

.section-title {
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 20px;
  text-transform: none;
}

.item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 18px 0;
  border-bottom: 1px dashed #e0e0e0;
}

.item-last {
  border-bottom: none;
}

.content {
  flex: 1;
}

.item-title {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
}

.item-meta {
  font-style: italic;
  color: #444;
  margin: 6px 0;
}

.resume-list {
  margin-top: 6px;
  line-height: 1.6;
  list-style-type: disc;
  list-style-position: outside;
  padding-left: 20px;
  margin-left: 0;
}

.item-date {
  width: 160px;
  text-align: right;
  color: #666;
  font-style: italic;
}`;