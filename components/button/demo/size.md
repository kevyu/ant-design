# 按钮尺寸

- order: 2

按钮有大、中、小三种尺寸。

通过设置 `size` 为 `lg` `sm` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。

---

````jsx
var Button = antd.Button;

React.render(<div>
  <Button type="primary" size="lg">大号按钮</Button>
  <Button type="primary">中号按钮(默认)</Button>
  <Button type="primary" size="sm">小号按钮</Button>
</div>
, document.getElementById('components-button-demo-size'));
````

<style>
#components-button-demo-size .ant-btn {
  margin-right: 8px;
}
</style>
