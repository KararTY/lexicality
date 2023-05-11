// Similar to Slate's unwrapNodes - https://docs.slatejs.org/api/transforms#transforms.unwrapnodes-editor-editor-options
editor.registerNodeTransform(ParagraphNode, (node) => {
  const parent = node.getParent()

  if (parent instanceof ParagraphNode) {
    const children = node.getChildren()
    parent.append(...children)

    node.remove() // Removing makes sure that this transform doesn't run again and creating an infinite loop.
  }
})
