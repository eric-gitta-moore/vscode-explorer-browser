# 贡献指南

感谢您对 Explorer Browser 项目感兴趣！我们欢迎并感谢任何形式的贡献。本文档将指导您如何参与项目开发。

## 开发环境配置

### 环境要求

- VSCode ^1.97.0
- Node.js
- pnpm

### 本地开发步骤

1. 克隆仓库
```bash
git clone https://github.com/eric-gitta-moore/vscode-explorer-browser.git
```

2. 安装依赖
```bash
pnpm install
```

3. 在VSCode中打开项目并按F5启动调试

## 代码规范

本项目使用 ESLint 进行代码规范检查。在提交代码前，请确保您的代码符合以下规范：

- 使用 TypeScript 编写代码
- 遵循项目现有的代码风格
- 确保代码通过 ESLint 检查

## 提交规范

### 分支管理

- `main`: 主分支，用于发布
- `develop`: 开发分支，所有功能开发都基于此分支
- `feature/*`: 功能分支，用于开发新功能
- `fix/*`: 修复分支，用于修复 bug

### 提交信息规范

提交信息应该清晰描述本次更改的内容，建议使用以下格式：

```
<type>(<scope>): <subject>

<body>

<footer>
```

其中：

- type: 提交类型
  - feat: 新功能
  - fix: 修复 bug
  - docs: 文档更新
  - style: 代码格式调整
  - refactor: 代码重构
  - test: 测试相关
  - chore: 构建过程或辅助工具的变动

- scope: 影响范围（可选）
- subject: 简短描述
- body: 详细描述（可选）
- footer: 关闭 issue 等信息（可选）

### 示例

```
feat(browser): 添加新的浏览器视图功能

- 实现了在资源管理器中打开网页的功能
- 添加了网页预览功能
- 优化了加载性能

Closes #123
```

## Pull Request 流程

1. 从 `develop` 分支创建新的功能分支或修复分支
2. 在新分支上进行开发
3. 确保代码通过所有测试
4. 提交 Pull Request 到 `develop` 分支
5. 等待代码审查
6. 根据审查意见进行修改
7. 合并到 `develop` 分支

### PR 说明要求

- 清晰描述本次更改的目的和内容
- 列出主要的更改点
- 如果有相关的 issue，请关联
- 如果有 UI 更改，请附上截图

## 问题反馈

如果您发现了 bug 或有新的功能建议，欢迎创建 issue。创建 issue 时，请：

1. 使用清晰的标题
2. 详细描述问题或建议
3. 如果是 bug，请提供：
   - 复现步骤
   - 期望行为
   - 实际行为
   - 环境信息（VSCode 版本等）
   - 相关的错误信息或截图

## 发布流程

1. 在 `develop` 分支完成开发和测试
2. 将 `develop` 合并到 `main` 分支
3. 在 `main` 分支上创建新的版本标签
4. 更新 CHANGELOG.md
5. 发布新版本

## 许可证

通过向本项目提交代码，您同意将您的代码按照项目的开源许可证进行授权。

## 联系方式

如果您有任何问题，可以：

1. 创建 issue
2. 联系项目维护者 [Eric Moore](https://github.com/eric-gitta-moore)

再次感谢您的贡献！