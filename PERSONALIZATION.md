# 📋 Personalization Checklist for Shweta's Birthday Website

Follow this checklist to customize the website with your own content!

## ✅ Required Personalizations

### 1. Photos (REQUIRED)
- [ ] Place 8 photos of Shweta in `public/images/` folder
- [ ] Name them: `shweta-1.jpg` through `shweta-8.jpg`
- [ ] Ensure images are good quality (recommended: 1200x800px or similar)
- [ ] Test the carousel to make sure all images load

**File location**: `public/images/`

---

### 2. Heartfelt Message
- [ ] Open `src/components/HeartfeltMessage.jsx`
- [ ] Find the `TODO: PERSONALIZE` comments
- [ ] Replace the placeholder message with your own words
- [ ] Add your name at the bottom instead of "Your Best Friend"
- [ ] Make it personal and meaningful!

**File to edit**: `src/components/HeartfeltMessage.jsx`
**Lines to update**: ~30-60

---

### 3. Quiz Questions
- [ ] Open `src/components/Quiz.jsx`
- [ ] Find the `questions` array (around line 15)
- [ ] Update all 3 questions with facts about Shweta
- [ ] Change the answer options
- [ ] Set the correct answer index (0-3) for each question
- [ ] Make questions fun and personal!

**File to edit**: `src/components/Quiz.jsx`
**Lines to update**: ~15-35

**Example**:
```javascript
{
  question: "What is Shweta's favorite hobby?",
  options: ['Reading', 'Dancing', 'Painting', 'Traveling'],
  correct: 2, // Index of 'Painting'
}
```

---

### 4. Gift Message
- [ ] Open `src/components/GiftBox.jsx`
- [ ] Find the `TODO: PERSONALIZE` comment
- [ ] Replace "free coffee date" with your own gift idea
- [ ] Update the description text
- [ ] Make it special and exciting!

**File to edit**: `src/components/GiftBox.jsx`
**Lines to update**: ~75-90

---

### 5. Hero Greeting (Optional)
- [ ] Open `src/components/Hero.jsx`
- [ ] Find the `TODO: PERSONALIZE` comment (around line 75)
- [ ] Update the subtitle message if desired

**File to edit**: `src/components/Hero.jsx`
**Line to update**: ~75

---

## 🎬 Optional Personalizations

### 6. Video Message (Optional)
- [ ] Record or create a birthday video
- [ ] Place it in `public/video/` folder
- [ ] Name it `birthday-message.mp4`
- [ ] Or update the path in `src/components/VideoPlayer.jsx`

**File location**: `public/video/birthday-message.mp4`

---

### 7. Background Music (Optional)
- [ ] Find a happy birthday song (royalty-free)
- [ ] Convert to MP3 or WAV format
- [ ] Place in `public/audio/` folder
- [ ] Update `src/components/AudioToggle.jsx` to use your audio file

**File to edit**: `src/components/AudioToggle.jsx`
**Current**: Uses base64 placeholder audio

---

### 8. Video Caption (Optional)
- [ ] Open `src/components/VideoPlayer.jsx`
- [ ] Find the `TODO: PERSONALIZE` comment for caption
- [ ] Update the caption text

**File to edit**: `src/components/VideoPlayer.jsx`

---

## 🎨 Advanced Customizations

### Change Colors
Edit `tailwind.config.js` to change the color palette:
- Peach, Coral, Pink, Gold colors defined in `theme.extend.colors`

### Add More Cards
Edit `src/App.jsx` and add new card objects to the `cards` array

### Modify Animations
Edit individual component files to adjust Framer Motion animations

---

## ✨ Quick Reference

### Files to Edit:
1. `src/components/HeartfeltMessage.jsx` - Personal message
2. `src/components/Quiz.jsx` - Quiz questions
3. `src/components/GiftBox.jsx` - Gift message
4. `src/components/VideoPlayer.jsx` - Video caption
5. `src/components/Hero.jsx` - Hero subtitle

### Folders for Assets:
1. `public/images/` - 8 photos of Shweta
2. `public/video/` - Birthday video (optional)
3. `public/audio/` - Background music (optional)

---

## 🚀 After Personalization

1. Save all files
2. Run `npm run dev` to test
3. Check all cards work correctly
4. Test on mobile device
5. Build for production: `npm run build`
6. Deploy to your hosting service!

---

**Happy customizing! Make it special for Shweta! 💕**
