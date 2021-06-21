import { flatten } from '../common/utils';

const overview = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit ultrices ornare. Praesent suscipit lacus eu nulla rhoncus suscipit. Quisque pulvinar pharetra lectus vitae pharetra. Mauris fringilla, nibh vitae posuere malesuada, dolor purus placerat felis, ac cursus leo arcu ac lectus. Nulla non elit augue. Nulla facilisi. Nulla fringilla dui mi, sed tempus tortor sodales vel. Sed at magna vel nunc fermentum blandit.

~~~js
function example() {
  console.log("Example");
}
~~~

Sed feugiat dui scelerisque lacus semper, at iaculis tortor consectetur. Cras non sapien dictum, convallis eros non, dictum tellus. Proin quis lectus quis ipsum pellentesque convallis vitae vulputate lacus. Sed hendrerit magna magna, interdum malesuada leo luctus ut. Quisque ex mauris, euismod sit amet eros in, tempor tincidunt mi. Aliquam sit amet dolor ut lectus blandit varius. Duis non felis semper, euismod felis a, egestas libero. Maecenas et fermentum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec diam a velit vestibulum vestibulum.

Fusce ac cursus nisi, nec volutpat diam. In in sapien ac nisl egestas feugiat nec et massa. Sed semper tristique vestibulum. Fusce posuere nibh sem, quis fermentum velit dictum eu. Nullam a nisl iaculis, dignissim magna vel, ultricies nisl. Vestibulum nibh purus, egestas eu pulvinar dignissim, porttitor sit amet est. Maecenas sapien est, egestas sit amet diam ut, semper pharetra quam. Sed mollis quam ac mauris faucibus volutpat. Phasellus at sem tempus, sagittis sapien eget, dignissim eros. Fusce pharetra tellus non mattis eleifend. Ut vel arcu elementum, semper quam vitae, ornare nisl. Nullam vitae diam aliquet, rhoncus ante in, pulvinar diam. Aenean porta nec arcu non suscipit. Sed vulputate at eros at egestas.

Ut sollicitudin elit a dui convallis, non efficitur eros maximus. Maecenas imperdiet justo eget imperdiet ultricies. Sed auctor dapibus nisl cursus suscipit. Suspendisse molestie dui nec facilisis lobortis. Cras commodo eros gravida, viverra nulla in, rutrum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tortor sapien, viverra et egestas at, sodales vitae ex. Integer feugiat sit amet tellus at facilisis. Nulla viverra leo sit amet nibh consequat venenatis.

Donec vestibulum interdum scelerisque. Aliquam rutrum arcu eu justo facilisis, tincidunt suscipit sapien sodales. Sed fringilla ante tellus, ut mattis sem ultrices eu. Nullam porttitor accumsan mattis. Nullam pulvinar aliquet felis. Quisque sodales cursus dictum. Nulla at ligula nec mi consequat faucibus.

Sed feugiat dui scelerisque lacus semper, at iaculis tortor consectetur. Cras non sapien dictum, convallis eros non, dictum tellus. Proin quis lectus quis ipsum pellentesque convallis vitae vulputate lacus. Sed hendrerit magna magna, interdum malesuada leo luctus ut. Quisque ex mauris, euismod sit amet eros in, tempor tincidunt mi. Aliquam sit amet dolor ut lectus blandit varius. Duis non felis semper, euismod felis a, egestas libero. Maecenas et fermentum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec diam a velit vestibulum vestibulum.

Fusce ac cursus nisi, nec volutpat diam. In in sapien ac nisl egestas feugiat nec et massa. Sed semper tristique vestibulum. Fusce posuere nibh sem, quis fermentum velit dictum eu. Nullam a nisl iaculis, dignissim magna vel, ultricies nisl. Vestibulum nibh purus, egestas eu pulvinar dignissim, porttitor sit amet est. Maecenas sapien est, egestas sit amet diam ut, semper pharetra quam. Sed mollis quam ac mauris faucibus volutpat. Phasellus at sem tempus, sagittis sapien eget, dignissim eros. Fusce pharetra tellus non mattis eleifend. Ut vel arcu elementum, semper quam vitae, ornare nisl. Nullam vitae diam aliquet, rhoncus ante in, pulvinar diam. Aenean porta nec arcu non suscipit. Sed vulputate at eros at egestas.

Ut sollicitudin elit a dui convallis, non efficitur eros maximus. Maecenas imperdiet justo eget imperdiet ultricies. Sed auctor dapibus nisl cursus suscipit. Suspendisse molestie dui nec facilisis lobortis. Cras commodo eros gravida, viverra nulla in, rutrum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tortor sapien, viverra et egestas at, sodales vitae ex. Integer feugiat sit amet tellus at facilisis. Nulla viverra leo sit amet nibh consequat venenatis.

Donec vestibulum interdum scelerisque. Aliquam rutrum arcu eu justo facilisis, tincidunt suscipit sapien sodales. Sed fringilla ante tellus, ut mattis sem ultrices eu. Nullam porttitor accumsan mattis. Nullam pulvinar aliquet felis. Quisque sodales cursus dictum. Nulla at ligula nec mi consequat faucibus.
`;

// Text for Module Sections
export const sections = [
  {
    'Overview': overview
  }
];

// Generate Headers from Sections
export const headers = flatten(sections.map((section) => Object.keys(section)));
