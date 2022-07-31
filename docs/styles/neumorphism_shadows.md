<style lang="scss">
@import "../scss/main.scss";
.grid-container {
  display: grid;
  grid-template-columns:  repeat(5, 1fr);
  gap: 40px;
  padding: 20px;
  & div {
    height: 80px;
    width: 80px;
    border-radius: 15px;
  }
}
</style>

# Neumorphism shadows

## Default
- `.neu-shadow`
<div class="grid-container">
  <div class="neu-shadow bg-base"></div>
  <div class="neu-shadow raised i-normal d-normal dir-top-left bg-base"></div>
</div>

```html
<div class="neu-shadow bg-base"></div>
<div class="neu-shadow raised i-normal d-normal dir-top-left bg-base"></div>
```

## Type
  - `.raised`
  - `.pressed`

<div class="grid-container">
  <div class="neu-shadow raised i-normal d-normal dir-top-left bg-base"></div>
  <div class="neu-shadow pressed i-normal d-normal dir-top-left bg-base"></div>
  <div class="neu-shadow raised i-light d-close dir-top-left bg-base"></div>
  <div class="neu-shadow pressed i-light d-close dir-top-left bg-base"></div>
</div>

```html
<div class="neu-shadow raised i-normal d-normal dir-top-left bg-base"></div>
<div class="neu-shadow pressed i-normal d-normal dir-top-left bg-base"></div>
<div class="neu-shadow raised i-light d-close dir-top-left bg-base"></div>
<div class="neu-shadow pressed i-light d-close dir-top-left bg-base"></div>
```

## Intensity
  - `.i-lighter`
  - `.i-light`
  - `.i-normal`
  - `.i-hard`
  - `.i-harder`

<div class="grid-container">
  <div class="neu-shadow raised i-lighter d-normal dir-top-left bg-base"></div>
  <div class="neu-shadow raised i-light d-normal dir-top-left bg-base"></div>
  <div class="neu-shadow raised i-normal d-normal dir-top-left bg-base"></div>
  <div class="neu-shadow raised i-hard d-normal dir-top-left bg-base"></div>
  <div class="neu-shadow raised i-harder d-normal dir-top-left bg-base"></div>
</div>

```html
<div class="neu-shadow raised i-lighter d-normal dir-top-left bg-base"></div>
<div class="neu-shadow raised i-light d-normal dir-top-left bg-base"></div>
<div class="neu-shadow raised i-normal d-normal dir-top-left bg-base"></div>
<div class="neu-shadow raised i-hard d-normal dir-top-left bg-base"></div>
<div class="neu-shadow raised i-harder d-normal dir-top-left bg-base"></div>
```

## Distance
  - `.d-closer`
  - `.d-close`
  - `.d-normal`
  - `.d-far`
  - `.d-further`

<div class="grid-container">
  <div class="neu-shadow raised i-normal d-closer dir-top-left bg-base"></div>
  <div class="neu-shadow raised i-normal d-close dir-top-left bg-base"></div>
  <div class="neu-shadow raised i-normal d-normal dir-top-left bg-base"></div>
  <div class="neu-shadow raised i-normal d-far dir-top-left bg-base"></div>
  <div class="neu-shadow raised i-normal d-further dir-top-left bg-base"></div>
</div>

```html
<div class="neu-shadow raised i-normal d-closer dir-top-left bg-base"></div>
<div class="neu-shadow raised i-normal d-close dir-top-left bg-base"></div>
<div class="neu-shadow raised i-normal d-normal dir-top-left bg-base"></div>
<div class="neu-shadow raised i-normal d-far dir-top-left bg-base"></div>
<div class="neu-shadow raised i-normal d-further dir-top-left bg-base"></div>
```

## Directions
  - `.dir-top-left`
  - `.dir-top-right`
  - `.dir-bottom-left`
  - `.dir-bottom-right`

<div class="grid-container">
  <div class="neu-shadow raised i-normal d-normal dir-top-left bg-base"></div>
  <div class="neu-shadow raised i-normal d-normal dir-top-right bg-base"></div>
  <div class="neu-shadow raised i-normal d-normal dir-bottom-left bg-base"></div>
  <div class="neu-shadow raised i-normal d-normal dir-bottom-right bg-base"></div>
</div>

```html
<div class="neu-shadow raised i-normal d-normal dir-top-left bg-base"></div>
<div class="neu-shadow raised i-normal d-normal dir-top-right bg-base"></div>
<div class="neu-shadow raised i-normal d-normal dir-bottom-left bg-base"></div>
<div class="neu-shadow raised i-normal d-normal dir-bottom-right bg-base"></div>
```