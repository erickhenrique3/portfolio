<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import CursorDot from './components/CursorDot.vue'
import HeroSection from './components/HeroSection.vue'
import StatementSection from './components/StatementSection.vue'
import JourneySection from './components/JourneySection.vue'
import NumbersSection from './components/NumbersSection.vue'
import WorkSection from './components/WorkSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import StackSection from './components/StackSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <CursorDot />
  <NavBar />
  <main>
    <HeroSection />
    <StatementSection />
    <JourneySection />
    <NumbersSection />
    <WorkSection />
    <ProjectsSection />
    <StackSection />
    <ContactSection />
  </main>
</template>
