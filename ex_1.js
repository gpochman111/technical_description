ex_1_elem = document.getElementById('instr_example_1')
ex_1_tables = ex_1_elem.getElementsByTagName('table')
ex_1 = {
    x: 0,
    y: 0,
    pc: 0,
    memory: ex_1_tables[0],
    registers: ex_1_tables[1],
    arrow: ex_1_elem.getElementsByTagName('img')[0],
    updateArrow: function () {
        ex_1.memory.rows[ex_1.pc + 1].cells[0].appendChild(ex_1.arrow);
    },
    updatePC: function () {
        ex_1.registers.rows[1].cells[1].innerText = '0x' + (ex_1.pc * 4).toString(16).padStart(4, '0')
        ex_1.updateArrow()
    },
    updateX: function () {
        ex_1.registers.rows[2].cells[1].innerText = ex_1.x
    },
    updateY: function () {
        ex_1.registers.rows[3].cells[1].innerText = ex_1.y
    },
}

function update_example_1 () {
    switch (ex_1.pc) {
        case 0:
            ex_1.y += 1;
            ex_1.updateY();
            ex_1.pc += 1;
            ex_1.updatePC();
            break;
        case 1:
            ex_1.x += ex_1.y;
            ex_1.updateX();
            ex_1.pc += 1;
            ex_1.updatePC();
            break;
        case 2:
            ex_1.pc = 0;
            ex_1.updatePC();
            break;
    }
}