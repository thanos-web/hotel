<script>
import 'vue-datepicker-ui/lib/vuedatepickerui.css';
import VueDatepickerUi from 'vue-datepicker-ui';

export default {
    components: {
        Datepicker: VueDatepickerUi,

    },

    data: () => {
        return {
            from: new Date(),
            to: new Date(),
            guests: 1,
            adultsCount: 1,
            totalKids: [],
            guestsOpened: false,
            calcOpened: false,

        }
    },
    methods: {
        addAdult() {
            if (this.adultsCount < 10)
                this.adultsCount++;

        },
        removeAdult() {
            if (this.adultsCount > 1)
                this.adultsCount--;

        },

        addKid() {
            this.totalKids.push(this.$refs.kids_selector.value)
        },

        removeKid(index) {
            this.totalKids.splice(index, 1)
        },

        calculateAgeSuffix(age) {
            if (age % 10 === 1 && age % 100 !== 11) {
                return "год";

            } else if (age % 10 >= 2 && age % 10 <= 4 && (age % 100 < 10)) {
                return "года";

            } else {
                return "лет";
            }
        },

        toggleGuestsOpened() {
            this.guestsOpened = !this.guestsOpened
        },

        toggleCalcOpened() {
            this.calcOpened = !this.calcOpened
        },


    },


    computed: {

        totalGuests() {
            return this.adultsCount + this.totalKids.length
        },

    }

}



</script>

<template>
    <div class="form_wrapper animate__animated animate__fadeIn animate__slow">
        <div class="booking_wrapper">
            <Datepicker lang="ru" placeholder="Заезд" />
            <Datepicker class="margin_left20" lang="ru" placeholder="Выезд" />
            <div @click="toggleGuestsOpened" class="people margin_left20" type="text" placeholder="">
                <p class="people_text">Количество гостей: {{ totalGuests }}</p>
                <img class="people_img" :class="guestsOpened ? 'rotated' : ''" src="/images/chevron-down.svg" alt="">
            </div>
            <button @click="toggleCalcOpened" class="calculate_btn margin_left20">Рассчитать стоимость*</button>
        </div>
        <div class="select_wrapper" v-show="guestsOpened">
            <div class="adults_wrapper">
                <p class="people_text">Взрослые</p>
                <div class="adults_counter">
                    <img @click="addAdult" class="add" src="/images/add.svg" alt="">
                    <p class="adults_count">{{ adultsCount }}</p>
                    <img @click="removeAdult" class="remove" src="/images/remove.svg" alt="">
                </div>
            </div>
            <div class="kids_wrapper">
                <div class="kids_count">
                    <p class="people_text">Количество детей:&nbsp; {{ totalKids.length }}</p>
                </div>
                <div class="kid" v-for="( age, index) in totalKids">
                    <p class="people_text">Добавлен ребенок:&nbsp; {{ age }} {{ calculateAgeSuffix(age) }} </p>
                    <img @click="removeKid(index)" src="/images/close.svg" alt="">
                </div>
                <div class="add_kid">
                    <p class="people_text">Добавить ребенка</p>
                    <img class=" add margin_left20" src="/images/add.svg" alt="">
                </div>
                <select @change="addKid" class="kids_age" name="" id="" ref="kids_selector">
                    <option value="-1" disabled="">Возраст ребёнка</option>
                    <option value="0">до 1 года</option>
                    <option value="1">1 год</option>
                    <option value="2">2 года</option>
                    <option value="3">3 года</option>
                    <option value="4">4 года</option>
                    <option value="5">5 лет</option>
                    <option value="6">6 лет</option>
                    <option value="7">7 лет</option>
                    <option value="8">8 лет</option>
                    <option value="9">9 лет</option>
                    <option value="10">10 лет</option>
                    <option value="11">11 лет</option>
                    <option value="12">12 лет</option>
                    <option value="13">13 лет</option>
                    <option value="14">14 лет</option>
                    <option value="15">15 лет</option>
                    <option value="16">16 лет</option>
                    <option value="17">17 лет</option>
                </select>

            </div>
        </div>
        <p class="coution">*Окончательную стоимость уточнять при бронировании номера!</p>
    </div>
    <div v-show="calcOpened" class="result_wrapper">
        <div class="close">
            <img @click="toggleCalcOpened" class="close_icon" src="/images/close.svg" alt="">
        </div>
        <p class="result_text">Ориентировочная стоимость составляет:</p>
        <div class="result_item">
            <p class="room_name">2-3-х местные номера "Комфорт"</p>
            <p class="margin_left20 price">2 000 ₽</p>
        </div>
        <div class="result_item">
            <p class="room_name">2-х комнатный 6-ти местный номер "С удобствами"</p>
            <p class="margin_left20 price">10 000 ₽</p>
        </div>
        <p class="coution-2">* Окончательную стоимость уточнять при бронировании номера!</p>
    </div>

</template>

<style scoped>
.form_wrapper {
    position: relative;
    border-radius: 20px;
    padding: 48px 60px;
    height: 180px;
    backdrop-filter: blur(40px);
    background: rgba(187, 201, 221, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
}

.booking_wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.margin_left20 {
    margin-left: 20px;
}

.margin_right10 {
    margin-right: 10px;
}

.calculate_btn {
    background-color: #FABC0C;
    color: rgb(0, 0, 0);
    border-radius: 6px;
    border: none;
    height: 50px;
    width: 240px;
    font-size: 16px;
    margin-top: 0;
}

.people {
    border-radius: 6px;
    background-color: rgb(255, 255, 255);
    height: 50px;
    border: none;
    outline: none;
    width: 260px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.people_text {
    color: rgb(123, 129, 135);
    margin: 0;
    font-size: 14px;
}

.coution {
    color: #ffff;
    font-size: 14px;
    margin-top: 20px;
}

.people_img {
    height: 24px;
    width: 24px;
    transition: 0.5s ease-in-out;
}

.rotated {
    rotate: 180deg;
    transition: 0.5s ease-in-out;
}

.select_wrapper {
    display: flex;
    flex-direction: column;
    width: 280px;
    background-color: #ffff;
    border-radius: 6px;
    color: black;
    padding: 20px;
    position: absolute;
    right: 360px;
    top: 100px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
}

.kids_wrapper {
    position: relative;
}

.adults_wrapper,
.kid,
.kids_count {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;

}

.add_kid {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
}

.kids_age {
    position: absolute;
    width: 100%;
    border-radius: 6px;
    padding: 10px;
    border: none;
    bottom: 0;
    height: 100%;
    left: 0;
    margin: 0;
    opacity: 0;
    padding: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 80%;
}

.adults_counter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
}

.add,
.remove {
    width: 32px;
    height: 32px;
}

.result_wrapper {
    width: 50%;
    display: flex;
    flex-direction: column;
    background-color: #ffff;
    border-radius: 20px;
    padding: 30px 20px;
    position: absolute;
    bottom: 30%;
    left: 25%;
    transition: 1s ease-in-out;

}

.result_item {
    display: flex;
    align-items: center;
}

.room_name,
.result_text {
    color: black;
}

.price {
    color: green;
}

.result_text {
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 10px;
}

.coution-2 {
    color: gray;
    font-size: 14px;
    margin-top: 10px;
}

.close {
    width: 100%;
    position: relative;
}

.close_icon {
    position: absolute;
    right: 0px;
    width: 32px;
}
@media (max-width: 1199px) {

    .form_wrapper {
        height: 320px;
        width: 680px;
    }
    .booking_wrapper{
        flex-direction: column;
        align-items: center;
        gap: 10px;
    } 
}

</style>
