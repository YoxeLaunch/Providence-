/**
 * Lightweight cosmic atmospheric sound synthesizer using Web Audio API.
 * Synthesizes deep space binaural drone + harmonic resonance.
 * Zero external audio assets, zero bandwidth.
 */

class CosmicAudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isRunning: boolean = false;
  private oscillators: OscillatorNode[] = [];

  public toggle(): boolean {
    if (this.isRunning) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isRunning;
  }

  public start() {
    try {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!this.ctx) {
        this.ctx = new AudioCtxClass();
      }

      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const now = this.ctx.currentTime;
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, now);
      this.masterGain.gain.exponentialRampToValueAtTime(0.22, now + 3);

      // Low pass filter to create deep oceanic cosmic rumble
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(140, now);

      this.masterGain.connect(filter);
      filter.connect(this.ctx.destination);

      // 1. Sub-bass fundamental (55 Hz - A1)
      const osc1 = this.ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(55, now);

      // 2. Harmonic drone with slight detune (55.4 Hz) for gentle cosmic beating
      const osc2 = this.ctx.createOscillator();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(55.4, now);

      // 3. Ethereal fifth overtone (82.5 Hz - E2)
      const osc3 = this.ctx.createOscillator();
      osc3.type = 'sine';
      osc3.frequency.setValueAtTime(82.5, now);

      // Sub gain
      const subGain = this.ctx.createGain();
      subGain.gain.setValueAtTime(0.6, now);

      osc1.connect(subGain);
      osc2.connect(subGain);
      osc3.connect(subGain);
      subGain.connect(this.masterGain);

      osc1.start();
      osc2.start();
      osc3.start();

      this.oscillators = [osc1, osc2, osc3];
      this.isRunning = true;
    } catch {
      this.isRunning = false;
    }
  }

  public stop() {
    if (!this.ctx || !this.masterGain) return;
    try {
      const now = this.ctx.currentTime;
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);

      setTimeout(() => {
        this.oscillators.forEach(osc => {
          try { osc.stop(); osc.disconnect(); } catch {}
        });
        this.oscillators = [];
        this.isRunning = false;
      }, 1600);
    } catch {
      this.isRunning = false;
    }
  }
}

export const cosmicAudio = new CosmicAudioEngine();
