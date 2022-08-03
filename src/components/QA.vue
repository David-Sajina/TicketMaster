<template>
  <v-container v-if="comp">
    <v-card>
      <div class="d-flex">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header
              ><v-text-field
                v-model="newQuestion"
                :disabled="disabled"
                label="Pitanje?"
              ></v-text-field>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <v-text-field
                v-model="newAnswer"
                :disabled="disabled"
                label="Odgovor"
              ></v-text-field>
              <v-row>
                <v-btn class="ma-2" color="#bfff00" small>
                  <v-icon color="#616a76" @click="edit" small>
                    mdi-pencil
                  </v-icon>
                </v-btn>
                <v-btn v-if="save" class="ma-2" color="#bfff00" small>
                  <v-icon color="#616a76" @click="saveEdit"> mdi-check </v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn class="ma-2" color="#616a76" small>
                  <v-icon @click.stop="dialog = true" color="#bfff00" small>
                    mdi-delete
                  </v-icon>
                </v-btn>
              </v-row>
              <v-dialog v-model="dialog" color="#616a76" max-width="290">
                <v-card>
                  <v-card-title class="text-h5" color="#616a76">
                    DELETE
                  </v-card-title>
                  <v-card-text>
                    Are you sure you want to delete this ticket question?
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="green darken-1" text @click="dialog = false">
                      Disagree
                    </v-btn>

                    <v-btn color="green darken-1" text @click="deleteThis">
                      Agree
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div></v-card
    >
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "QA",
  props: {
    question: String,
    answer: String,
    id: String,
  },
  data: () => ({
    readonly: false,
    disabled: true,
    save: false,
    newQuestion: "",
    newAnswer: "",
    dialog: false,
    comp: true,
  }),

  methods: {
    async setQA() {
      this.newQuestion = this.question;
      this.newAnswer = this.answer;
    },

    edit() {
      this.disabled = !this.disabled;
      this.save = !this.save;
    },
    async deleteThis() {
      await axios.delete(`http://localhost:5000/ticket/${this.id}`);
      this.dialog = false;
      this.comp = !this.comp;
      this.$toast.info("Successfully deleted", {
        position: "bottom-center",
        timeout: 2966,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false,
      });
    },

    async saveEdit() {
      this.disabled = !this.disabled;
      this.save = !this.save;
      const res = await axios.patch(`http://localhost:5000/ticket/${this.id}`, {
        newQuestion: this.newQuestion,
        newAnswer: this.newAnswer,
      });
      console.log(res.data);
    },
  },

  computed: {
    ...mapGetters({ user: "user" }),
  },

  mounted() {
    this.setQA();
  },
};
</script>
