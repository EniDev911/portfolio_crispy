
### Mermaid

Para habilitar los diagramas con mermaid debemos usar lo siguiente en el front-matter:

```markdown
---
mermaid: true
---
```


### Description list

```markdown
Sun
: the star around which the earth orbits

Moon
: the natural satellite of the earth, visible by reflected light from the sun
```


### ToDo list

```markdown
- [ ] Job
  - [x] Step 1
  - [x] Step 2
  - [ ] Step 3
```


### Especificar un nombre de archivo


````markdown
```shell
# content
```
{: file="path/to/file" }
````

### Códigos liquid

````markdown
{% raw %}
```liquid
{% if product.title contains 'Pack' %}
  This product's title contains the word Pack.
{% endif %}
```
{% endraw %}
````

