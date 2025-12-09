# 🎨 How to Personalize for Shweta

## ✅ Quick Personalization Checklist

### 1. 📸 Replace Photos (MOST IMPORTANT)
- [ ] Add 8 photos of Shweta to `public/images/` folder
- [ ] Name them: `shweta-1.jpg`, `shweta-2.jpg`, ..., `shweta-8.jpg`
- [ ] Use high-quality images (recommended: 800x600px or higher)
- [ ] Supported formats: JPG, PNG, WEBP

### 2. 💌 Update Heartfelt Message
**File**: `src/components/HeartfeltMessage.jsx`
- [ ] Find the `TODO: PERSONALIZE` comment (line ~10)
- [ ] Replace the entire `message` variable with your personal message
- [ ] Add your name at the end instead of "Your Friend"
- [ ] Keep it heartfelt and personal!

### 3. 🎯 Customize Quiz Questions
**File**: `src/components/Quiz.jsx`
- [ ] Find the `TODO: PERSONALIZE` comment (line ~12)
- [ ] Update all 3 questions with real facts about Shweta
- [ ] Change the options to match Shweta's preferences
- [ ] Update the `correct` answer indices (0-3)
- [ ] Modify the explanations to be personal

### 4. 🎁 Update Gift Message
**File**: `src/components/GiftBox.jsx`
- [ ] Find the `TODO: PERSONALIZE` comment (line ~85)
- [ ] Replace "Free Coffee Date" with your actual gift
- [ ] Update the description and details
- [ ] Change the emoji if needed (☕ → your gift emoji)

### 5. 🎬 Add Birthday Video (Optional)
- [ ] Record or create a birthday video message
- [ ] Save as `public/video/birthday-message.mp4`
- [ ] Or update the path in `src/components/VideoPlayer.jsx`

### 6. 🎵 Replace Background Music (Optional)
**File**: `src/components/AudioToggle.jsx`
- [ ] Replace the base64 audio data with your own
- [ ] Or add an MP3 file to `public/audio/` and update the path
- [ ] Keep it short and looping for best experience

## 🎨 Advanced Customization

### Colors
**File**: `tailwind.config.js` and `src/index.css`
- Current palette: Peach (#ff9b6b), Coral (#ff6b6b), Pink (#ff6bb8), Gold (#ffd700)
- Change these colors to match Shweta's preferences

### Hero Section
**File**: `src/components/Hero.jsx`
- Update the birthday date (currently December 9th)
- Modify the subtitle message
- Add more decorative elements if desired

### Card Descriptions
**File**: `src/App.jsx` (lines 20-50)
- Update card titles and descriptions
- Modify the gradient combinations

## 🚀 Testing Your Changes

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Test all features**:
   - [ ] Hero animations work
   - [ ] All 6 cards open properly
   - [ ] Photo carousel shows your images
   - [ ] Quiz questions are updated
   - [ ] Gift box reveals your gift
   - [ ] Heartfelt message displays correctly

3. **Test on mobile**:
   - [ ] Responsive design works
   - [ ] Touch/swipe gestures work
   - [ ] All text is readable

## 📱 Final Steps

1. **Build for production**:
   ```bash
   npm run build
   ```

2. **Deploy** (choose one):
   - Upload `dist/` folder to web hosting
   - Use Vercel: `vercel deploy`
   - Use Netlify: drag & drop `dist/` folder

## 💡 Pro Tips

- **High-quality photos**: Use clear, well-lit photos of Shweta
- **Personal touch**: Include inside jokes and shared memories
- **Test thoroughly**: Check on different devices and browsers
- **Backup**: Keep a copy of your personalized version

---

**Remember**: The more personal you make it, the more special it will be for Shweta! 💕