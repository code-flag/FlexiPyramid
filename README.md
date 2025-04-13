
### ✅ `README.md` for `flexipyramid`


# FlexiPyramid

**FlexiPyramid** is a responsive, customizable segmented pyramid component for React and Next.js projects. Designed to be stylish and mobile-friendly, it includes diagonal edge transformations and segment interactions.

![FlexiPyramid Preview](https://your-image-link.com/preview.gif)

---

## 🚀 Features

- ✅ Fully responsive layout
- 🎯 Adjustable width, height, and aspect ratio
- ✂️ Dynamic diagonal cuts with auto-calculated angles
- 🎨 Segment colors and labels via Bootstrap classes
- 🖱️ Optional click events on each segment
- 🧠 Built-in style separation for easy theming

---

## 📦 Installation

```bash
npm install flexipyramid
```

---

## 🔧 Usage

```jsx
import React from 'react';
import FlexiPyramid from 'flexipyramid';
import 'flexipyramid/src/FlexiPyramid.css'; // Make sure to import the styles

const App = () => {
  return (
    <div className="container my-5">
      <FlexiPyramid
        maxWidth={600}
        aspectRatio={3 / 4}
        segments={[
          {
            label: 'Top',
            className: 'bg-primary',
            onClick: () => alert('Top clicked'),
          },
          {
            label: 'Mid 1',
            className: 'bg-light text-dark',
          },
          {
            label: 'Mid 2',
            className: 'bg-warning',
          },
          {
            label: 'Mid 3',
            className: 'bg-danger',
          },
          {
            label: 'Base',
            className: 'bg-success',
          },
        ]}
      />
    </div>
  );
};

export default App;
```

---

## 🧩 Props

| Prop         | Type            | Default | Description                                               |
|--------------|------------------|---------|-----------------------------------------------------------|
| `maxWidth`   | `number`         | `600`   | The maximum width (in px) of the pyramid container        |
| `aspectRatio`| `number`         | `0.75`  | Ratio of height to width (`height / width`)               |
| `segments`   | `Array<Object>`  | `[]`    | List of segment objects with label, className, and event  |

Each `segment` object can have:

```js
{
  label: 'string',            // Text shown in the segment
  className: 'bg-primary',    // Bootstrap class(es)
  onClick: () => {}           // Optional click event
}
```

---

## 📄 License

[MIT](./LICENSE)
