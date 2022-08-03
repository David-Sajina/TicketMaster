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
              ></v-text-field
              ><v-btn class="ma-2" color="purple" dark>
                <v-icon dark @click="edit"> mdi-wrench </v-icon>
              </v-btn>
              <v-btn class="ma-2" color="indigo" dark>
                <v-icon @click.stop="dialog = true" dark> mdi-delete </v-icon>
              </v-btn>
              <v-dialog v-model="dialog" max-width="290">
                <v-card>
                  <v-card-title class="text-h5"> DELETE </v-card-title>

                  <v-card-text>
                    Are you sure you want to delete this ticket question?
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="green darken-1" text @click="dialog = false">
                      Cancel
                    </v-btn>

                    <v-btn color="green darken-1" text @click="deleteThis">
                      Delete
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-btn v-if="save" class="mx-2" fab dark small color="primary">
                <v-icon dark @click="saveEdit"> mdi-check </v-icon>
              </v-btn>
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
