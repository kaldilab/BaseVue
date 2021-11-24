<template>
  <div v-frag>
    <h3 class="section__title">{{ $route.matched[1].meta.label }}</h3>

    <section class="section handling">
      <h3 class="handling__title">이벤트 제어</h3>
      <ul class="handling__list">
        <li class="handling__item">
          <p>
            현재 숫자는
            <strong>{{ counter }}</strong>
            입니다.
          </p>
          <button @click="btnMinus" class="btn btn-primary">-1</button>
          <button @click="btnPlus" class="btn btn-secondary">+1</button>
        </li>
        <li class="handling__item">
          <button @click="btnAlert('버튼1')" class="btn btn-danger">
            버튼
          </button>
          <button @click="btnAlert('버튼2')" class="btn btn-success">
            버튼
          </button>
          <button @click="btnAlert('버튼3')" class="btn btn-warning">
            버튼
          </button>
        </li>
        <li class="handling__item">
          <button
            @click="btnWarn('버튼을 누르셨군요.', $event)"
            class="btn btn-info"
          >
            주의사항
          </button>
        </li>
      </ul>
    </section>

    <section class="section handling">
      <h3 class="handling__title">폼 바인딩</h3>
      <ul class="handling__list">
        <li class="handling__item">
          <div class="form-check">
            <input
              v-model="checkBox"
              class="form-check-input"
              type="checkbox"
              id="checkbox"
            />
            <label class="form-check-label ms-2" for="checkbox">
              {{ checkBox }}
            </label>
          </div>
        </li>
        <li class="handling__item">
          <div class="form-check form-check-inline">
            <input
              v-model="checkNames"
              class="form-check-input"
              type="checkbox"
              id="checkJack"
              value="Jack"
            />
            <label class="form-check-label" for="checkJack">Jack</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              v-model="checkNames"
              class="form-check-input"
              type="checkbox"
              id="checkJohn"
              value="John"
            />
            <label class="form-check-label" for="checkJohn">John</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              v-model="checkNames"
              class="form-check-input"
              type="checkbox"
              id="checkJike"
              value="Mike"
            />
            <label class="form-check-label" for="checkJike">Mike</label>
          </div>
          <p class="mt-3">체크한 이름: {{ checkNames }}</p>
        </li>
        <li class="handling__item">
          <div class="form-check form-check-inline">
            <input
              v-model="radioNames"
              class="form-check-input"
              type="radio"
              id="radioJack"
              value="Jack"
            />
            <label class="form-check-label" for="radioJack">Jack</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              v-model="radioNames"
              class="form-check-input"
              type="radio"
              id="radioJohn"
              value="John"
            />
            <label class="form-check-label" for="radioJohn">John</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              v-model="radioNames"
              class="form-check-input"
              type="radio"
              id="radioMike"
              value="Mike"
            />
            <label class="form-check-label" for="radioMike">Mike</label>
          </div>
          <p class="mt-3">선택한 이름: {{ radioNames }}</p>
        </li>
        <li class="handling__item">
          <div class="input-group-btn" data-toggle="buttons">
            <label class="btn btn-secondary me-3">
              <input
                v-model="buttonNames"
                class="visually-hidden"
                type="radio"
                value="Jack"
              />Jack
            </label>
            <label class="btn btn-secondary me-3">
              <input
                v-model="buttonNames"
                class="visually-hidden"
                type="radio"
                value="John"
              />John
            </label>
            <label class="btn btn-secondary me-3">
              <input
                v-model="buttonNames"
                class="visually-hidden"
                type="radio"
                value="Mike"
              />Mike
            </label>
          </div>
          <p class="mt-3">선택한 이름: {{ buttonNames }}</p>
        </li>
        <li class="handling__item">
          <select v-model="selectNames1" class="form-select">
            <option selected value="">이름을 선택하세요...</option>
            <option value="Jack">Jack</option>
            <option value="John">John</option>
            <option value="Mike">Mike</option>
          </select>
          <p class="mt-3">선택한 이름: {{ selectNames1 }}</p>
        </li>
        <li class="handling__item">
          <select v-model="selectNames2" class="form-select">
            <option selected value="">이름을 선택하세요...</option>
            <option
              v-for="item in selectOptions"
              :key="item.index"
              :value="item.value"
            >
              {{ item.text }}
            </option>
          </select>
          <p class="mt-3">선택한 이름: {{ selectNames2 }}</p>
        </li>
      </ul>
    </section>

    <section class="section handling">
      <h3 class="handling__title">텍스트 검색</h3>
      <form @submit.prevent class="d-flex">
        <div class="input-group mb-3 w-25">
          <input
            v-model="searchTerm"
            type="text"
            class="form-control"
            placeholder="검색어를 입력하세요."
          />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="submit">
              입력
            </button>
          </div>
        </div>
      </form>
      <ul class="list-group list-group-flush">
        <li
          v-for="(item, index) in searchList"
          :key="item.index"
          class="list-group-item"
        >
          [{{ index + 1 }}] {{ item }}
        </li>
      </ul>
    </section>

    <section class="section handling">
      <h3 class="handling__title">텍스트 입출력</h3>
      <div class="form-group">
        <vue-editor
          v-model="inoutput"
          placeholder="내용을 입력하세요." 
        >
        </vue-editor>
      </div>
      <div class="ql-editor border" v-html="inoutput"></div>
    </section>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  components: {
    VueEditor,
  },
  data() {
    return {
      counter: 0,
      checkBox: false,
      checkNames: [],
      radioNames: "",
      buttonNames: "",
      selectNames1: "",
      selectNames2: "",
      selectOptions: [
        { text: "Jack", value: "Jack" },
        { text: "John", value: "John" },
        { text: "Mike", value: "Mike" },
        { text: "Susan", value: "Susan" },
        { text: "Ros", value: "Ros" },
        { text: "Monica", value: "Monica" },
      ],
      textList: [
        "Consequat sit mollit Lorem cillum voluptate ea tempor culpa laboris proident qui irure duis.",
        "Anim dolor commodo et proident culpa ipsum.",
        "Amet eiusmod sunt mollit qui officia qui.",
        "Aute aliquip minim esse incididunt.",
        "Elit commodo mollit cupidatat reprehenderit labore voluptate nulla ullamco ut.",
        "무엇을 위하여, 사람은 뜨고, 온갖 가지에 끝에 오아이스도 열매를 것이다. ",
        "같지 곳이 뜨거운지라, 투명하되 천자만홍이 피고 보배를 내려온 봄",
        "바람이다. 사는가 피고 싶이 보라. 품으며, 이상은 인생을 그들에게 피에",
        "원질이 찬미를 구하기 곳으로 것이다.",
        "무한한 착목한는 이것이야말로 지혜는 황금시대다. 대중을 어디 얼마나 ",
      ],
      searchTerm: "",
      inoutput: "",
    };
  },
  methods: {
    btnPlus() {
      this.counter++;
    },
    btnMinus() {
      this.counter--;
    },
    btnAlert(text) {
      alert(text + "입니다.");
    },
    btnWarn: function(message, event) {
      alert(event.target.innerHTML + message);
    },
  },
  computed: {
    searchList() {
      if (this.searchTerm) {
        return this.textList.filter((item) => {
          return this.searchTerm
            .toLowerCase()
            .split(" ")
            .every((term) => item.toLowerCase().includes(term));
        });
      } else {
        return this.textList;
      }
    },
  },
};
</script>
