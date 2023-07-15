import { selector, selectorFamily, DefaultValue } from 'recoil';
import { ModalProps, modalListState, modalState } from './atoms';

export const modalSelector = selectorFamily<ModalProps, string>({
  key: 'modalSelector',
  get:
    (id) =>
    ({ get }) =>
      get(modalState(id)),
  set:
    (id) =>
    ({ get, set, reset }, newValue) => {
      if (newValue instanceof DefaultValue) {
        set(modalListState, (prev) => prev.filter((modalId) => modalId != id));
        reset(modalState(id));
        return;
      }
      set(modalState(id), newValue);

      if (get(modalListState).find((id) => id === newValue.id)) return;
      set(modalListState, (prev) => [...prev, newValue.id]);
    },
});

export const modalListSelector = selector<Array<string>>({
  key: 'modalListSelector',
  get: ({ get }) => get(modalListState),
});

// 인터넷보고 다시 시작하자.
// selectorFamily를 이용한 다중 모달의 상태를 제어하는 set 함수를 만들고 있었다.
// 한 마디로 인터넷이 무슨 쌉소리를 하고 있냐면 니가 지금 모달을 열고 있는지, 아니면 닫고 있는지를 판단해야 한다는 것. modalListState의 배열에는 현재 열려 있는 모달들만이 담겨있다.
// 공식 문서 좀 뜯어봐야 할 듯.
// 이거 진짜 오래 걸릴 것 같아서 양해 좀 구하고 스피드하게 진행해야 함.
