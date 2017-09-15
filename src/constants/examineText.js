/**
 * 甄别方式介绍文本枚举
 */
export default {
    SINGLE: '本空填写的数据与此空的正确答案对比一致，本甄别框判对。',
    MULTI_ELM: '甄别框中所有空填写的数据与正确答案对比，全部一致，本甄别框判对。',
    MULTI_LINE: '填写的数据没有固定顺序，行数据与正确答案行数据循环比对，本行数据一致，本行判对。',
    SETTLEMENT: '单页时同单编辑框，续页时，相加后甄别'
}