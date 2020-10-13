import React from 'react';
import './App.css';
import Tabs from './Tabs'

const pages = [
  {
    title: "Tab 1",
    content: <div>{"Div content in the tab"}</div>,
  },
  {
    title: "Tab 2",
    content: "String content in the tab",
  },
  {
    title: "Tab 3",
    content: "Another string content",
  },
  {
    title: "Tab 4",
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam consequuntur culpa cupiditate
      doloribus esse et eum fuga, in, officia officiis, perspiciatis porro quas quidem quis soluta suscipit. Laudantium,
      ratione.Accusantium consectetur consequuntur deserunt, dolore earum fugiat harum ipsam ipsum itaque iusto molestiae
    molestias natus omnis quia quos recusandae repudiandae sapiente tenetur veniam voluptas. Accusamus dolores id
    ratione repellat sapiente?Enim nisi non quaerat sapiente! Accusantium asperiores assumenda cupiditate debitis eligendi est ex facilis fugit
    inventore iure magnam magni nesciunt nihil possimus praesentium provident quia, ratione repudiandae totam veniam
    voluptatibus?Accusantium debitis delectus doloribus, eius explicabo ipsum labore nam non numquam odit ullam velit voluptatum.
    A accusamus autem dolore, ea error illo laudantium, mollitia natus, nostrum odio qui tempora temporibus?Aspernatur doloremque dolores ex ipsam modi necessitatibus nihil quaerat recusandae repudiandae rerum! Alias,
    aspernatur consequatur dicta dolorum esse explicabo facilis fugiat inventore placeat quibusdam quo reiciendis
    sapiente? Ipsum, minima, repellendus!`
  },
]

function App() {
  return (
    <div className="App">
      <Tabs pages={pages}></Tabs>
    </div>
  );
}

export default App;
